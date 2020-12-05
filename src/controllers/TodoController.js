const mongoose = require('mongoose')

const ToDo = mongoose.model('ToDo')
// const ToDo = require('../models/ToDo');


module.exports = {
    //teste
    async list(req,res){
        let todos = await ToDo.find()
        todos.forEach(todo =>{
            todo.image = 'http://localhost:3000/imagens/' + todo.image
        })
        
        res.json(todos);
    },

    // async list(req, res){       
    //     const todo = await ToDo.find()
    //     todo.image = 'http://localhost:3000/imagens/' + todo.image
    //     return res.json(todo)
    // },
    //teste
    async create(req, res){
        const image = req.files.image
        const dados = req.body
        const newTodo = {...dados, 'image': image.name}
        const todoCreated = await ToDo.create(newTodo)
        if(todoCreated)
            image.mv('./uploads/'+ image.name)
        res.json(todoCreated)
        // return res.status(201).json(todoCreated)
    },

    async update(req, res){
        const id = req.params.id
        const todo = req.body
        const todoUpdated = await ToDo.findOneAndUpdate({ _id: id }, todo, {new: true})
        if(!todoUpdated){
            return res.status(400).json({msg: "Item não encontrado!"})
        }
        return res.json(todoUpdated)
    },

    async delete(req, res){
        const id = req.params.id
        const todoDeleted = await ToDo.findOneAndDelete({ _id: id })
        if(!todoDeleted){
            return res.status(400).json({msg: "Item não encontrado!"})
        }
        return res.status(204).json()
    }

}