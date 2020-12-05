  
const express = require('express')

const routes = express.Router()

const TodoController = require('./controllers/TodoController')

routes.get('/todo', TodoController.list)

routes.post('/todo', TodoController.create)

routes.put('/todo/:id', TodoController.update)

routes.delete('/todo/:id', TodoController.delete)

routes.post('/upload', function(req, res){
    let image = req.files.image
    image.mv('./uploads/'+image.name)
    res.status(200).json()
});

module.exports = routes