import uvicorn
from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from router import router

# Initialize FastAPI
app = FastAPI()

app.include_router(router, prefix="/knowthentic/v1", tags=["Knowthentic Learning"])

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)