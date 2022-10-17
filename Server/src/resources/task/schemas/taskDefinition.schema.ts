import mongoose from "mongoose"
import { TaskFrequency } from "../../../enums/taskFrequency.js"

const taskDefinitionSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    frequency: { 
        type: String, 
        required: true, 
        enum: Object.values(TaskFrequency)
    }
})

export default mongoose.model("TaskDefinition", taskDefinitionSchema)