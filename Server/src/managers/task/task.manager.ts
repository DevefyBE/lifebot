import * as taskResource from "../../resources/task/task.resource.js"
import { CreateTaskDefinitionQuery, ICreateTaskDefinitionQuery, ICreateTaskDefinitionResult, IGetAllTaskDefinitionsResult, IGetTaskDefinitionByIdResult } from "../../models/task.models.js";

export async function GetAllTaskDefinitionsAsync(): Promise<IGetAllTaskDefinitionsResult> {
    return await taskResource.GetAllTaskDefinitionsAsync();
}

export function CreateTaskDefinitionAsync(query: CreateTaskDefinitionQuery): Promise<ICreateTaskDefinitionResult> {
    if(query.ValidateTaskDefinition()){
        throw Error("Query is not valid!");
    };

    return taskResource.CreateTaskDefinitionAsync(query);
}

export async function GetTaskDefinitionByIdAsync(id: string): Promise<IGetTaskDefinitionByIdResult | null> {
    if (id == "") {
        throw Error("id can not be an empty string")
    }

    return await taskResource.GetTaskDefinitionByIdAsync(id);
}

export async function CreateTaskInstances(): Promise<void> {
    let taskDefinitions = await taskResource.GetAllTaskDefinitionsAsync();


}