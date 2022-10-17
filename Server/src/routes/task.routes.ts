import express from "express";
import * as taskController from "../controllers/task/task.controller.js"

var router = express.Router();

router.get("/", taskController.GetAllTasksAsync)
router.post("/", taskController.CreateTaskAsync);
router.get("/:id", taskController.GetTaskByIdAsync);

export default router;