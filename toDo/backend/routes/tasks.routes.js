const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks.controller");
const { validateTask } = require("../middleware/tasks.middleware");

router.get("/", tasksController.read);
router.post("/", validateTask, tasksController.create);
router.put("/:id", validateTask, tasksController.update);
router.delete("/:id", tasksController.delete);

module.exports = router;