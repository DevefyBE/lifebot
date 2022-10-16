import express from "express";
import * as taskController from "../controllers/task/task.controller.js"

var router = express.Router();

router.get("/:id", taskController.GetTaskById);

export default router;