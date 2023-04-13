import mongoose from "mongoose";

const { Schema } = mongoose;

const postsSchema = new Schema({
  postId: { type: String, default: new mongoose.Types.ObjectId() },
  userId: { type: String, ref: "users" },
  title: { type: String },
  desc: { type: String },
  created_at: { type: Number, default: Date.now() },
  likes: { type: Number, default: 0 },
});

export default mongoose.model("posts", postsSchema);
