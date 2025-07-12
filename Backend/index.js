const express = require('express')
const { createTodo, updateTodo } = require('./types')
const { Todo } = require('./db')


const app = express()

app.use(express.json())


const port = 5050

app.post('/todo', async function (req, res) {
    const userBody = req.body;
    const { success } = createTodo.safeParse(userBody)
    if (!success) {
        res.status(411).json({
            message: "Send right inputs"
        })
        return;
    }
    await Todo.create({
        title: userBody.title,
        description: userBody.description,
        completed: false
    })
    return res.json({
        mesg: 'Todo is created'
    })


})
app.get('/todos', async function (req, res) {
    const allTodo = await Todo.find({})

    return res.status(200).json({
        allTodo: allTodo
    })
})
app.put('/completed', async function (req, res) {
    const userBody = req.body;
    const { success } = updateTodo.safeParse(userBody)
    if (!success) {
        res.status(411).json({
            message: "Send right todo id"
        })
        return;
    }
    await Todo.findByIdAndUpdat({
        _id: userBody.id
    }, {
        completed: true
    })
    return res.status(202).json({
        msg: "Status Changed Completed"
    })

})


app.listen(port, () => {
    console.log(`Server in running on ${port}`);
})