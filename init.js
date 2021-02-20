import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT =process.env.PORT || 4000;
const handleListening = ()=>
    console.log(`localhost:${PORT}에서 실행중입니다`);

app.listen(PORT, handleListening);