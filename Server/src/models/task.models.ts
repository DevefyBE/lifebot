import { TaskFrequency } from "../enums/taskFrequency.js";
import taskDefinitionSchema from "../resources/task/schemas/taskDefinition.schema.js";

export interface IGetAllTaskDefinitionsResult {
    taskDefinitions: IGetAllTaskDefinitionsResultItem[]
}

export interface IGetAllTaskDefinitionsResultItem {
    id: string
    title: string,
    frequency: TaskFrequency
}

export interface ICreateTaskDefinitionQuery {
    title: string,
    frequency?: TaskFrequency
}

export interface ITaskDefinitionWeeklyOptions {

}

export interface ITaskDefinitionMonthlyOptions {

}

export class CreateTaskDefinitionQuery {
    public title: string;
    public frequency?: string;
    public weeklyOptions?: ITaskDefinitionWeeklyOptions;
    public monthlyOptions?: ITaskDefinitionMonthlyOptions;

    constructor() {
        this.title = "";
    }

    public ValidateTaskDefinition(): boolean {
        if (this.frequency == undefined) {
            this.frequency = TaskFrequency.None
        }

        if (this.frequency == TaskFrequency.Weekly){
            return this.weeklyOptions != undefined;
        }

        if(this.frequency == TaskFrequency.Monthly){
            return this.monthlyOptions != undefined
        }
        
        return true;
    }
}

export interface ICreateTaskDefinitionResult {
    id: string
}

export interface IGetTaskDefinitionByIdResult {
    title: string,
    frequency: TaskFrequency
}