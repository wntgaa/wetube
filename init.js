import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
const PORT =process.env.PORT || 4000;
const handleListening = ()=>
    console.log(`localhost:${PORT}에서 실행중입니다`);

app.listen(PORT, handleListening);