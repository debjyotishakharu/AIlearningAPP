from fastapi import HTTPException, UploadFile, File, APIRouter, Form
from knowthentic import knowthentic_service_one, knowthentic_service_two

router = APIRouter()

@router.post("/personalized_roadmap_v1")
def personalized_roadmap_vone(skill: str = Form(...),proficiency: str = Form(...),pace: str = Form(...)):
    try:
        print("Inside Router")
        response=knowthentic_service_one(skill,proficiency,pace)
        print("response", response)
        return response
    except Exception as e:
        print("failed at personalized_roadmap_v1 router")
        print(str(e))
        raise HTTPException(**e.__dict__)
    
@router.post("/personalized_roadmap_v2")
def personalized_roadmap_vtwo(skill: str = Form(...),proficiency: str = Form(...),pace: str = Form(...)):
    try:
        print("Inside Router")
        response=knowthentic_service_two(skill,proficiency,pace)
        print("response", response)
        return response
    except Exception as e:
        print("failed at personalized_roadmap_v2 router")
        print(str(e))
        raise HTTPException(**e.__dict__)