import { TaskFrequency } from "../../enums/taskFrequency.js"

export interface IGetAllTaskDefinitionsResponse{
    taskDefinitions: IGetAllTaskDefinitionsResponseItem[]
}

export interface IGetAllTaskDefinitionsResponseItem{
    id: string
    title: string,
    frequency: TaskFrequency
}

export interface IGetTaskDefinitionByIdRequestModel {
    id: string
}

export interface IGetTaskDefinitionByIdResponseModel {
    title: string,
    frequency?: TaskFrequency
}

export interface ICreateTaskDefinitionRequestModel {
    title: string,
    frequency?: TaskFrequency
}

export interface ICreateTaskDefinitionResponseModel {
    id: string
}