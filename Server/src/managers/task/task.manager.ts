import { TaskFrequency } from "../../enums/taskFrequency.js";
import * as taskResource from "../../resources/task/task.resource.js"
import { ICreateTaskQuery, ICreateTaskResult, IGetAllTasksResult, IGetTaskByIdResult } from "../../models/task.models.js";

export async function GetAllTasksAsync() : Promise<IGetAllTasksResult>{
    return await taskResource.GetAllTasksAsync();
}

export function CreateTaskAsync(query: ICreateTaskQuery): Promise<ICreateTaskResult> {
    if (query.frequency == undefined) {
        query.frequency = TaskFrequency.None;
    }

    return taskResource.CreateTaskAsync(query);
}

export async function GetTaskByIdAsync(id: string): Promise<IGetTaskByIdResult | null> {
    if (id == "") {
        throw Error("id can not be an empty string")
    }

    return await taskResource.GetTaskByIdAsync(id);
}