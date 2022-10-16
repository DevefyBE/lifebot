import express from "express";
import bodyParser from "body-parser";
import multer from "multer"
import cookieParser from "cookie-parser"
import { AddressInfo } from "net";

import task_routes  from "./routes/task.routes.js";

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.use("/api/task", task_routes)

var server = app.listen(8080, () => {
    let addressInfo = server.address() as AddressInfo;
    let host = addressInfo.address;
    let port = addressInfo.port;

    console.log(`Example app listening at http://${host}:${port}`,)
})