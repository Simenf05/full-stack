from fastapi import FastAPI
from fastapi.responses import RedirectResponse

app = FastAPI()


@app.get("/")
def redirect():
    return RedirectResponse(url="/api")
    
    
    
@app.get("/api")
def get_api():
    return {"hei": "hei"}
