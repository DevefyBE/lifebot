import express from "express";
import * as taskController from "../controllers/task/task.controller.js"

var router = express.Router();

router.get("/", taskController.GetAllTaskDefinitionsAsync);
router.post("/", taskController.CreateTaskDefinitionAsync);
router.get("/:id", taskController.GetTaskDefinitionByIdAsync);

export default router;