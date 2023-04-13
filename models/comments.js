import mongoose from "mongoose";

const { Schema } = mongoose;

const commentsSchema = new Schema({
  commentId: { type: String, default: new mongoose.Types.ObjectId() },
  postId: { type: String, ref: "posts" },
  userId: { type: String, ref: "users" },
  comment: { type: String, required: true },
  created_at: { type: Number, default: Date.now() },
});

export default mongoose.model("comments", commentsSchema);
