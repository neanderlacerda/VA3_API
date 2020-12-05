const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload');
const requireDir = require('require-dir')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(fileUpload({
    createParentPath: true
}));
app.use('/imagens', express.static('uploads'))

// Mongo
mongoose.connect('mongodb://root:rootpwd@localhost:27017/todos?authSource=admin', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(port)