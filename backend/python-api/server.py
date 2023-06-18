from fastapi import FastAPI
from fastapi.responses import RedirectResponse, JSONResponse

app = FastAPI()


@app.get("/")
def redirect():
    return RedirectResponse(url="/api")
    
data = {
    "h1": "Hvor mange ting kaker trenger",
    "data": {
        "napolionskake": 10,
        "daimnkake": 3,
        "mandelkake": 6,
        "heiehiiehiehihei": 100
    }
}
    
@app.get("/api")
def get_api():
    return JSONResponse(content=data)
