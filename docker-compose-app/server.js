const express = require("express");
const redis = require("redis");

//레디스 클라이언트 생성
const client = redis.createClient({
    host: "redis-server",
    port: 6379
});

client.set("number", 0);

//서버 생성
const app = express();

app.get("/", (req, res) => {
    client.get("number", (err, number) => {
        res.send("숫자가 1씩 증가합니다. 숫자: " + number);
        client.set("number", parseInt(number) + 1);
    });
});

//서버 가동
app.listen(8082);
console.log("Server is running...");