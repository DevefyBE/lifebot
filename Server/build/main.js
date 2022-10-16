import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import test_routes from "./routes/test.routes.js";
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.get("/", (req, res) => {
    res.send("hello world!");
});
app.use("/test", test_routes);
var server = app.listen(8080, () => {
    let addressInfo = server.address();
    let host = addressInfo.address;
    let port = addressInfo.port;
    console.log(`Example app listening at http://${host}:${port}`);
});
