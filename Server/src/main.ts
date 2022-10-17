import express from "express";
import bodyParser from "body-parser";
import multer from "multer"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import { AddressInfo } from "net";
import * as dotenv from "dotenv";


import task_routes  from "./routes/task.routes.js";

dotenv.config();

let app = express();

app.use(express.json());
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.use("/api/task", task_routes)

if (!process.env.MONGO_DB) {
    throw Error("Could not find MONGO_DB in your environment");
}

mongoose.connect(process.env.MONGO_DB);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var server = app.listen(8080, () => {
    let addressInfo = server.address() as AddressInfo;
    let host = addressInfo.address;
    let port = addressInfo.port;

    console.log(`Example app listening at http://${host}:${port}`,)
})