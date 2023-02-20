from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os


app = FastAPI()
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


class Message(BaseModel):
    foodName: str
    msg: str


class Food(BaseModel):
    food: str


@app.get("/")
def read_files():

    files = {"foods": []}
    path = "./database"
    file_list = os.listdir(path)
    for i in file_list:
        tmp = {"foodName": '', "description": ''}
        file = open("./database/"+i, "r")
        context = file.readlines()
        tmp["foodName"] = i[:len(i)-4]
        tmp["description"] = ' '.join(context)
        files["foods"].append(tmp)
    return files


@app.post("/save")
def save_files(text: Message):
    file = open("./database/"+text.foodName+'.txt', 'w')
    file.write(text.msg)
    file.close()
    return {text.foodName: text.msg}


@app.get("/total")
def total_list():
    path = "./database"
    file_list = os.listdir(path)
    total_num = len(file_list)
    return {"총 갯수": total_num}


@app.post("/delete")
def delete_file(route: Food):
    os.remove("./database/"+route.food+'.txt')
    return {"삭제완료"}
