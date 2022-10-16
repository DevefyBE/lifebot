import express from "express";
var router = express.Router();
router.get("/", (req, res) => {
    res.send("router test success");
});
export default router;
