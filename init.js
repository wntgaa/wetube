import app from "./app";

const PORT =4000;
const handleListening = ()=>
    console.log(`localhost:${PORT}에서 실행중입니다`);

app.listen(PORT, handleListening);