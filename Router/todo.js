const express = require('express');
const todoList = require('../CONTROLLER/todo');
const router = express.Router();

router.post('/todos', todoList.createTodo);
router.get('/todos', todoList.getAllTodos);
router.put('/todos/:id',todoList.updateTodo);
router.delete('/todos/:id', todoList.deleteTodo);

module.exports = router;
