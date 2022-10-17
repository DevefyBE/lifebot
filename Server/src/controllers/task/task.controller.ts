import express from "express";
import * as taskManager from "../../managers/task/task.manager.js"
import { CreateTaskDefinitionQuery } from "../../models/task.models.js";
import { ICreateTaskDefinitionRequestModel, ICreateTaskDefinitionResponseModel, IGetAllTaskDefinitionsResponse, IGetTaskDefinitionByIdRequestModel, IGetTaskDefinitionByIdResponseModel } from "./task.controller.models.js";

export async function GetAllTaskDefinitionsAsync(req: express.Request, res: express.Response<IGetAllTaskDefinitionsResponse>): Promise<void> {
    let result = await taskManager.GetAllTaskDefinitionsAsync();

    res.send({
        taskDefinitions: result.taskDefinitions.map((item) => {
            return {
                id: item.id,
                title: item.title,
                frequency: item.frequency
            }
        })
    })
}

export async function CreateTaskDefinitionAsync(req: express.Request<ICreateTaskDefinitionRequestModel>, res: express.Response<ICreateTaskDefinitionResponseModel>): Promise<void> {
    const query = new CreateTaskDefinitionQuery();
    query.title = req.body.title;
    query.frequency = req.body.frequency;

    let result = await taskManager.CreateTaskDefinitionAsync(query);

    res.send({ id: result!.id })
}

export async function GetTaskDefinitionByIdAsync(req: express.Request<IGetTaskDefinitionByIdRequestModel>, res: express.Response<IGetTaskDefinitionByIdResponseModel>): Promise<void> {
    let requestModel = req.params;
    let managerResult = await taskManager.GetTaskDefinitionByIdAsync(requestModel.id);

    if (managerResult == null) {
        res.status(404).send();
    } else {
        res.send({ title: managerResult!.title, frequency: managerResult!.frequency });
    }
}