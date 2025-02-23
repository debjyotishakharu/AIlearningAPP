import os
from langchain.chat_models import init_chat_model
from langchain_community.retrievers import TavilySearchAPIRetriever
from langchain_community.tools import TavilySearchResults
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from fpdf import FPDF

# Ensure roadmapDIR exists
os.makedirs("roadmapDIR", exist_ok=True)

os.environ["GROQ_API_KEY"] = "Your key here"
os.environ["TAVILY_API_KEY"] = "Your key here"

llm = init_chat_model("llama3-8b-8192", model_provider="groq")
retriever = TavilySearchAPIRetriever()

def generate_pdf(content: str, filename: str):
    """Generates a PDF from the given content with proper text encoding and text wrapping."""
    pdf = FPDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    
    max_width = 190  # Adjust for proper margins
    
    for line in content.split("\n"):
        encoded_line = line.encode("latin-1", "replace").decode("latin-1")  # Handle non-ASCII characters
        if len(encoded_line) > 90:  # Approximate character limit per line
            words = encoded_line.split()
            new_line = ""
            for word in words:
                if pdf.get_string_width(new_line + word) < max_width:
                    new_line += word + " "
                else:
                    pdf.cell(max_width, 10, txt=new_line.strip(), ln=True, align='L')
                    new_line = word + " "
            if new_line:
                pdf.cell(max_width, 10, txt=new_line.strip(), ln=True, align='L')
        else:
            pdf.cell(max_width, 10, txt=encoded_line, ln=True, align='L')
    
    pdf_path = os.path.join("roadmapDIR", filename)
    pdf.output(pdf_path, "F")
    return pdf_path

#USING TavilySearchAPIRetriever
def knowthentic_service_one(skill,proficiency,pace):
    try:
        prompt = ChatPromptTemplate.from_template(
        """You are an expert learning consultant generating personalized learning roadmaps.

        Context: {context}

        Question: {question}"""
        )
        chain = (
            RunnablePassthrough.assign(context=(lambda x: x["question"]) | retriever)
            | prompt
            | llm
            | StrOutputParser()
        )

        prompttemplate = f"You are an AI assistant for Knowthentic, an AI-powered platform that helps users learn the skills they need by creating personalized learning roadmaps. Generate a detailed roadmap to master {skill} for a {proficiency} level learner at a {pace} pace. Include step-by-step instructions, milestones, and essential topics. Also suggest top resources along with relevant links for learning the skill"
        print(prompttemplate)

        roadmap=chain.invoke({"question": prompttemplate})

        filename="roadmap_v1.pdf"
        pdf_path=generate_pdf(roadmap,filename)

        return {"Roadmap":roadmap, "FilePath": pdf_path}
    except Exception as e:
        print("failed at knowthentic_service")
        print(str(e))

#USING TavilySearchResults
def knowthentic_service_two(skill,proficiency,pace):
    try:
        tool = TavilySearchResults(
        max_results=10,
        search_depth="advanced",
        include_answer=True,
        include_raw_content=True,
        include_images=True,
        # include_domains=[...],
        # exclude_domains=[...],
        # name="...",            # overwrite default tool name
        # description="...",     # overwrite default tool description
        # args_schema=...,       # overwrite default args_schema: BaseModel
        )
        searchresults=tool.invoke({"query": f"Top resources to learn {skill} including courses, videos and books"})

        prompttemplate = f"""
            You are an AI assistant for Knowthentic, an AI-powered learning platform that helps users learn the skills they need by creating personalized learning roadmaps based on the Skill they want to learn, current proficiency and learning pace.
            You also recommend the most relevant courses, articles, and tutorials based on the user’s learning preferences along with relevant links.

            Skill they want to learn: {skill}
            current proficiency: {proficiency}
            Learning pace: {pace}

            Using this information, you generate a structured roadmap with high-quality learning resources from trusted sources.

            ***Roadmap Generation***
            -Generate a detailed roadmap.
            - Include step-by-step instructions, milestones, and essential topics.

            ***Personalization***

            - Adjust recommendations based on the user's proficiency level (Beginner, Intermediate, Advanced).
            - Adapt the learning path to fit their learning pace (Fast, Moderate, Slow).
            - Offer structured timelines to keep users on track.

            ***User Experience***

            - Present the learning roadmap in a clear and visually structured format (e.g., step-by-step modules).

            ***Resource Recommendations***

            - Search the internet and databases for the most high-quality and up-to-date learning materials.
            - Recommend courses (from platforms like Coursera, Udemy, edX, etc.), blog articles, GitHub projects, research papers, YouTube tutorials, and official documentation.
            - Make sure to suggest any links or URLs for the relevant courses.

            Use the below search results for resource recommendation:
            {searchresults}
            """
        system = "You are an expert learning consultant generating personalized learning roadmaps."
        human = "{text}"
        prompt = ChatPromptTemplate.from_messages([("system", system), ("human", human)])

        chain = prompt | llm
        answer=chain.invoke({"text": prompttemplate})

        response=answer.content

        filename="roadmap_v2.pdf"

        pdf_path=generate_pdf(response,filename)

        return {"Roadmap":response, "FilePath": pdf_path}
    
    except Exception as e:
        print("failed at knowthentic_service_two")
        print(str(e))