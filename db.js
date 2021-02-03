import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("DB에 연결되었습니다")
const handleError = () => console.log("DB연결에 에러가 발생했습니다!")

db.once("open", handleOpen);
db.on("error",handleError);
