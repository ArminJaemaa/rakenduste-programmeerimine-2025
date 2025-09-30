const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const taskRoutes = require('./routes/tasks.routes');

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});