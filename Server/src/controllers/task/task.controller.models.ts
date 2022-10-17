import { TaskFrequency } from "../../enums/taskFrequency.js"

export interface IGetAllTasksResponse{
    tasks: IGetAllTasksResponseItem[]
}

export interface IGetAllTasksResponseItem{
    id: string
    title: string,
    frequency: TaskFrequency
}

export interface IGetTaskByIdRequestModel {
    id: string
}

export interface IGetTaskByIdResponseModel {
    title: string,
    frequency?: TaskFrequency
}

export interface ICreateTaskRequestModel {
    title: string,
    frequency?: TaskFrequency
}

export interface ICreateTaskResponseModel {
    id: string
}