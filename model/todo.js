const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const toDoSchema= new Schema(
    {
        task:{ type: String, required: true},
        isDone: {type: Boolean, required: false}
    }
)
const ToDo = mongoose.model('ToDo', toDoSchema)

module.exports= ToDo