import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express()

app.use(express.json())

app.get('/questions', (req, res) =>{
    res.status(200).send([
        {
            id:'1',
            question: 'Quelle est la capitale de la France',
            answer: 'Paris'
        }
    ])
})

app.post('/questions', (req, res) =>{
    const {question, answer} = req.body
    if (!question || !answer){
        return res.status(400).send({error:'errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'})
    }
    res.status(201).send({
        message:'question created successfully'
    })
})

app.delete('/questions/:id', (req, res) =>{
    const {id} = req.params
    res.status(200).send({message: `Question ${id} deleted`})
})

app.listen(PORT, ()=>{
    console.log(`serveur running on http://localhost:${PORT}`)
})