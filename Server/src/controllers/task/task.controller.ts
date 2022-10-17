import express from "express";
import * as taskManager from "../../managers/task/task.manager.js"
import { ICreateTaskRequestModel, ICreateTaskResponseModel, IGetAllTasksResponse, IGetTaskByIdRequestModel, IGetTaskByIdResponseModel } from "./task.controller.models.js";

export async function GetAllTasksAsync(req: express.Request, res: express.Response): Promise<void> {
    let result = await taskManager.GetAllTasksAsync();

    res.send({
        tasks: result.tasks.map((item) => {
            return {
                id: item.id,
                title: item.title,
                frequency: item.frequency
            }
        })
    })
}

export async function CreateTaskAsync(req: express.Request<ICreateTaskRequestModel>, res: express.Response<ICreateTaskResponseModel>): Promise<void> {
    const query = {
        title: req.body.title,
        frequency: req.body.frequency
    }

    let result = await taskManager.CreateTaskAsync(query);

    res.send({ id: result!.id })
}

export async function GetTaskByIdAsync(req: express.Request<IGetTaskByIdRequestModel>, res: express.Response<IGetTaskByIdResponseModel>): Promise<void> {
    let requestModel = req.params;
    let managerResult = await taskManager.GetTaskByIdAsync(requestModel.id);

    if (managerResult == null) {
        res.status(404).send();
    } else {
        res.send({ title: managerResult!.title, frequency: managerResult!.frequency });
    }
}