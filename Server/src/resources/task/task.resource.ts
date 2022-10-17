import TaskDefinition from "./schemas/taskDefinition.schema.js"
import { CreateTaskDefinitionQuery, ICreateTaskDefinitionQuery, ICreateTaskDefinitionResult, IGetAllTaskDefinitionsResult, IGetTaskDefinitionByIdResult } from "../../models/task.models.js";

export async function GetAllTaskDefinitionsAsync(): Promise<IGetAllTaskDefinitionsResult> {
    let tasksModels = await TaskDefinition.find();

    let result: IGetAllTaskDefinitionsResult = { taskDefinitions: [] }

    result.taskDefinitions = tasksModels.map((item) => {
        return {
            id: item._id.toString(),
            title: item.title,
            frequency: item.frequency
        }
    })

    return result;
}

export async function CreateTaskDefinitionAsync(query: CreateTaskDefinitionQuery): Promise<ICreateTaskDefinitionResult> {
    const taskModel = new TaskDefinition({
        title: query.title,
        frequency: query.frequency
    })

    await taskModel.save();

    return { id: taskModel._id.toString() }
}

export async function GetTaskDefinitionByIdAsync(id: string): Promise<IGetTaskDefinitionByIdResult | null> {
    console.log("", id)
    let taskModel = await TaskDefinition.findById(id);

    if (taskModel == null) {
        return null;
    }

    return { title: taskModel.title, frequency: taskModel.frequency }
}