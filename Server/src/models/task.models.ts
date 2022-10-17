import { TaskFrequency } from "../enums/taskFrequency.js";

export interface IGetAllTasksResult{
    tasks: IGetAllTasksResultItem[]
}

export interface IGetAllTasksResultItem{
    id: string
    title: string,
    frequency: TaskFrequency
}

export interface ICreateTaskQuery {
    title: string,
    frequency?: TaskFrequency
}

export interface ICreateTaskResult {
    id: string
}

export interface IGetTaskByIdResult {
    title: string,
    frequency: TaskFrequency
}