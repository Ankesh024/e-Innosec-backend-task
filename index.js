const express = require('express');
const todoRoutes = require('./Router/todo');

const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use('/api', todoRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
