const { body, validationResult } = require('express-validator');

const catsRouteMiddleware = (req, res, next) => {
    console.log("Time: ", Date.now());
    next();
};

const catsGetRouteMiddleware = (req, res, next) => {
    console.log("GET middleware");
    next();
};

const validateCat = [
    body('name').notEmpty().withMessage('name is required').escape(), (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.send(errors.array())
            return res.status(400);
        }
        console.log("Cat validated")
        next();
    }
]

module.exports = { catsRouteMiddleware, catsGetRouteMiddleware, validateCat };