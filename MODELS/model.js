
let todos = []; 
let idCounter = 1;

class TodoModel {
    static createTodo(task) {
        const newTodo = {
            id: idCounter++,
            task,
            completed: true,
        };
        todos.push(newTodo);
        return newTodo;
    }

    static getAllTodos() {
        return todos;
    }

    static updateTodo(id, updatedTask) {
        const todo = todos.find((t) => t.id === parseInt(id));
        if (todo) {
            todo.task = updatedTask.task || todo.task;
            todo.completed = updatedTask.completed !== undefined ? updatedTask.completed : todo.completed;
            return todo;
        }
        return null;
    }

    static deleteTodo(id) {
        const index = todos.findIndex((t) => t.id === parseInt(id));
        if (index !== -1) {
            const deletedTodo = todos.splice(index, 1);
            return deletedTodo[0];
        }
        return null;
    }
}

module.exports = TodoModel;
