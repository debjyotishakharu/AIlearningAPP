import openai
import os
import requests
from dotenv import load_dotenv
load_dotenv()
openai.api_key = os.getenv('OPENAI_API_KEY')

google_api_key = os.getenv('GOOGLE_API_KEY')
cse_id = os.getenv('CSE_ID')
openai_api_key = os.getenv('OPENAI_API_KEY')

def search_google(query):
    # Google Custom Search JSON API request
    url = f"https://www.googleapis.com/customsearch/v1?q={query}&key={google_api_key}&cx={cse_id}"

    response = requests.get(url)
    results = response.json().get('items', [])

    recommendations = "\n".join([item['title'] + ": " + item['link'] for item in results[:5]])  # Limit to top 5 results

    return recommendations

def generate_roadmap(skill, proficiency, learning_pace):
    # Prompt for GPT-4 to generate a roadmap
    prompt = f"Generate a detailed roadmap to master {skill} for a {proficiency} level learner at a {learning_pace} pace. Include step-by-step instructions, milestones, and essential topics."

    # Call OpenAI GPT-4 API
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=500
    )

    roadmap = response.choices[0].text.strip()

    # Fetch recommendations using Google Search
    courses = search_google(f"{skill} courses")
    videos = search_google(f"{skill} tutorial videos")
    books = search_google(f"{skill} books")

    # Combine the roadmap with recommendations
    detailed_roadmap = f"{roadmap}\n\nRecommended Courses:\n{courses}\n\nRecommended Videos:\n{videos}\n\nRecommended Books:\n{books}"

    return detailed_roadmap