export const getAllQestions = (req, res) =>{
    res.status(200).send([
        {
            id:'1',
            question: 'Quelle est la capitale de la France',
            answer: 'Paris'
        }
    ])
}

export const createQuestion = (req, res) =>{
    const {question, answer} = req.body
    res.status(201).send({
        message:'question created successfully'
    })
}

export const deleteQuestion = (req, res) =>{
    const {id} = req.params
    res.status(200).send({message: `Question ${id} deleted`})
}