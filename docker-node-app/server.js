const express = require("express");

const PORT = 8082;

const app = express();

app.get("/", (req, res) => {
    res.send("집에 보내주세요~뇸뇸뇸뇸~!!!!!");
});

app.listen(PORT);
console.log("Server in running...");