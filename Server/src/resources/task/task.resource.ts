import Task from "../task/schemas/task.schema.js"
import { ICreateTaskQuery, ICreateTaskResult, IGetAllTasksResult, IGetTaskByIdResult } from "../../models/task.models.js";

export async function GetAllTasksAsync(): Promise<IGetAllTasksResult> {
    let tasksModels = await Task.find();

    let result: IGetAllTasksResult = { tasks: [] }

    result.tasks = tasksModels.map((item) => {
        return {
            id: item._id.toString(),
            title: item.title,
            frequency: item.frequency
        }
    })

    return result;
}

export async function CreateTaskAsync(query: ICreateTaskQuery): Promise<ICreateTaskResult> {
    const taskModel = new Task({
        title: query.title,
        frequency: query.frequency
    })

    await taskModel.save();

    return { id: taskModel._id.toString() }
}

export async function GetTaskByIdAsync(id: string): Promise<IGetTaskByIdResult | null> {
    let taskModel = await Task.findById(id);

    if (taskModel == null) {
        return null;
    }

    return { title: taskModel.title, frequency: taskModel.frequency }
}