# Knowthentic: AI-Powered Learning Roadmap Generator

Knowthentic is an AI-powered learning platform that generates personalized learning roadmaps based on the skill you want to learn, your current proficiency, and your learning pace. It recommends the most relevant courses, articles, and tutorials using real-time internet search.

## Features
- Generates detailed learning roadmaps with step-by-step instructions and milestones.
- Personalizes recommendations based on proficiency level and learning pace.
- Searches for the best learning resources using Tavily's search API.
- Uses the **Llama 3 (8B)** model from Groq for AI-powered responses.
- Outputs the roadmap as a PDF file for easy access and reference.

## Tech Stack
- **FastAPI** for API development
- **LangChain** for AI model integration
- **Groq** for Llama 3-based inference
- **Tavily Search API** for retrieving relevant learning resources
- **FPDF** for PDF generation

## Installation & Setup
### Prerequisites
Ensure you have Python 3.8+ installed and set up a virtual environment:

```sh
python -m venv env
source env/bin/activate  # On Windows, use `env\Scripts\activate`
```

### Install Dependencies
```sh
pip install -r requirements.txt
```

### Set API Keys
Before running the project, set up your environment variables for **Groq** and **Tavily** APIs:

```sh
export GROQ_API_KEY="your_groq_api_key"
export TAVILY_API_KEY="your_tavily_api_key"
```
For Windows PowerShell:
```powershell
$env:GROQ_API_KEY="your_groq_api_key"
$env:TAVILY_API_KEY="your_tavily_api_key"
```

## Usage
### Running the Service
```sh
python main.py
```

### API Endpoints
#### 1. Generate Learning Roadmap (Using TavilySearchAPIRetriever)
**Endpoint:** `/knowthentic_service_one`

**Method:** `POST`

**Request Body:**
```json
{
  "skill": "Machine Learning",
  "proficiency": "Beginner",
  "pace": "Moderate"
}
```

**Response:**
```json
{
  "Roadmap": "Generated learning roadmap...",
  "FilePath": "roadmapDIR/roadmap_v1.pdf"
}
```

#### 2. Generate Learning Roadmap (Using TavilySearchResults)
**Endpoint:** `/knowthentic_service_two`

**Method:** `POST`

**Request Body:**
```json
{
  "skill": "Deep Learning",
  "proficiency": "Intermediate",
  "pace": "Fast"
}
```

**Response:**
```json
{
  "Roadmap": "Generated learning roadmap...",
  "FilePath": "roadmapDIR/roadmap_v2.pdf"
}
```

## Dependencies
- `langchain`
- `langchain_community`
- `fpdf`
- `uvicorn`
- `fastapi`
- `os`

## License
This project is licensed under the MIT License.

## Contact
For any queries, feel free to reach out!


