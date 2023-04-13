import mongoose from "mongoose";

const { Schema } = mongoose;

const postReactionsSchema = new Schema({
  reactionId: { type: String, default: new mongoose.Types.ObjectId() },
  postId: { type: String, ref: "posts" },
  likes: { type: Array, default: [] },
  unlikes: { type: Array, default: [] },
  created_at: { type: Number, default: Date.now() },
});

export default mongoose.model("post_reactions", postReactionsSchema);
