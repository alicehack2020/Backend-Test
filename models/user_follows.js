import mongoose from "mongoose";

const { Schema } = mongoose;

const userFollowsSchema = new Schema({
  userId: {
    type: String,
    required: true,
    ref: "users",
  },
  followers: { type: Array, default: [] },
  following: { type: Array, default: [] },
});

export default mongoose.model("user_follows", userFollowsSchema);
