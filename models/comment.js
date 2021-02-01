import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "댓글을 입력하세요"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;