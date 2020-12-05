
const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({

    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    dateTime: {
        type: Date,
        default: Date.now()
    }

})

const ToDo = mongoose.model('ToDo',ToDoSchema);