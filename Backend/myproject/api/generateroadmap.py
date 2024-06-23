import openai
import os
from dotenv import load_dotenv
load_dotenv()
openai.api_key = 'YOUR_OPENAI_API_KEY'

google_api_key = os.getenv('GOOGLE_API_KEY')
cse_id = os.getenv('CSE_ID')
openai_api_key = os.getenv('OPENAI_API_KEY')

def generate_roadmap(skill, proficiency, learning_pace):
    prompt = f"Generate a roadmap to learn {skill} for a {proficiency} level learner at a {learning_pace} pace."
    
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=500
    )
    
    return response.choices[0].text.strip()