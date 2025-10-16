import { readFile, writeFile } from "fs/promises";
import {randomUUID} from 'crypto'
export const createTodo = async (req, res) =>{
    console.log("aaaaaaaaaaaa")
    let json
    try{
        json = JSON.parse(await readFile('./exercice1/todo.json', { encoding: 'utf8' }));
        
    }catch (e){
        await writeFile('./exercice1/todo.json', '[]');
        json = [];
    }
    const nJson = {
        "id": randomUUID(),
        "text": req.body.text,
        "completed": req.body.completed
    } 
    if (!nJson.text){
        return res.status(400).send({error:'Invalid body'})
    }
    if (!nJson.completed){
        nJson.completed = false;
    }
    json.push(nJson);

    await writeFile("./exercice1/todo.json", JSON.stringify(json));

    res.status(201).send({
        
        message:'todo created successfully'
    })
}

export const getOneTodo = async (req, res) =>{
    const json = JSON.parse(await readFile('./exercice1/todo.json', { encoding: 'utf8' }));
    // console.log(json);
    json.forEach(function (elem){
        
        if (elem.id == req.params.id) return res.status(200).send(elem)
    })
    return res.status(404).send({error: "Not Found"});
}