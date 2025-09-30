const express = require("express");
const router = express.Router();
const catsController = require("../controllers/cats.controller");
const {
    catsRouteMiddleware,
    catsGetRouteMiddleware,
    validateCat,
} = require("../middlewares/cats.middlewares");

router.use(catsRouteMiddleware);

// /cats/ Get endpoint level middleware
router.get("/", catsGetRouteMiddleware, catsController.read);
router.get("/:name", catsGetRouteMiddleware, catsController.readOne);
router.post("/", validateCat, catsController.create);
router.put("/:name", catsController.update);
router.delete("/:name", catsController.delete);

module.exports = router;