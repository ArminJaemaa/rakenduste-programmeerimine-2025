const Task = require('../models/task.model')

/** @type {Task[]} */
const tasks = [];

function createId(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < 8; j++) {
            const randomInd = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomInd);
        };
        if (i < length - 1) {
            result += "-";
        }
    };
    return result;
}

exports.create = (req, res) => {
    const { task } = req.body;
    const newId = createId(4);
    const timestamp = Date.now();
    const updated = null;
    const deleted = false;
    const newTask = {
        id: newId,
        title: task,
        created: timestamp,
        updatedAt: updated,
        deleted: deleted
    }
    tasks.push(newTask);
    res.sendStatus(201);
}

exports.read = (req, res) => {
    res.send(tasks);
};

exports.update = (req, res) => {
    const taskToUpdateId = req.params.id;
    const { Task: updatedTask } = req.body;
    const task = tasks.find(i => i.id === taskToUpdateId);
    if (!task) return res.status(404).json({ error: 'task not found' });
    task.title = updatedTask;
    task.updatedAt = Date();

    res.sendStatus(200);
};

exports.delete = (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find(i => i.id === taskId);
    task.deleted = true;

    res.sendStatus(200);
};