const { body, validationResult } = require('express-validator');

const validateTask = [
    body('task').notEmpty().withMessage('Task is required').escape(), (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        console.log("task validated")
        next();
    }
]

module.exports = { validateTask };