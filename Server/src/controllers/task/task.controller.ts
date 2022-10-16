import express from "express";
import * as taskManager from "../../managers/task.manager.js"
import { IGetTaskByIdRequestModel, IGetTaskByIdResponseModel } from "./task.controller.models.js";


export function GetTaskById(req: express.Request<IGetTaskByIdRequestModel>, res: express.Response<IGetTaskByIdResponseModel>): void {
    let requestModel = req.params;
    let managerResult = taskManager.GetTaskById(requestModel.id);
    res.send({ id: requestModel.id });
}