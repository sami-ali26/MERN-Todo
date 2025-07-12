const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:adminmongo@cluster0.uqnsz.mongodb.net/reactodo")
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = {
    Todo
}