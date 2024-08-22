const TodoModel = require('../MODELS/model');

class todoList {
    static createTodo(req, res) {
        const { task } = req.body;
        if (!task) {
            return res.status(400).json({ error: 'Task is required' });
            
        }
        const newTodo = TodoModel.createTodo(task);
        res.status(201).json(newTodo);
        console.log(res)
    }

    static getAllTodos(req, res) {
        const todos = TodoModel.getAllTodos();
        res.status(200).json(todos);
    }

    static updateTodo(req, res) {
        const { id } = req.params;
        const updatedTask = req.body;
        const updatedTodo = TodoModel.updateTodo(id, updatedTask);
        if (updatedTodo) {
            res.status(200).json(updatedTodo);
        } else {
            res.status(404).json({ error: 'Todo not found' });
        }
    }

    static deleteTodo(req, res) {
        const { id } = req.params;
        const deletedTodo = TodoModel.deleteTodo(id);
        if (deletedTodo) {
            res.status(200).json(deletedTodo);
        } else {
            res.status(404).json({ error: 'Todo not found' });
        }
    }
}

module.exports = todoList;
