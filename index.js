const express = require('express');
const app = express();

const PORT = 4000;

function handleListening() {
    console.log (`서버가 http://localhost:${PORT}에서 실행중입니다`);
}

app.listen(PORT, handleListening);