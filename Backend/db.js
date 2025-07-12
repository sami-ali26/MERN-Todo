const mongoose = require('mongoose')
require('dotenv').config();
const DB = process.env.DB_URL
mongoose.connect(process.env.DB)
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = {
    Todo
}