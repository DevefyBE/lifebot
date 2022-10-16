import express from "express";
import * as testController from "../controllers/test.controller.js"

var router = express.Router();

router.get("/", testController.test_get);

export default router;
