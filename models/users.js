import mongoose from "mongoose";

const { Schema } = mongoose;

const usersSchema = new Schema({
  userId: {
    type: String,
    default: new mongoose.Types.ObjectId(),
  },
  username: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  number_of_followers: { type: Number, default: 0 },
  number_of_followings: { type: Number, default: 0 },
  created_at: { type: Number, default: Date.now() },
});

export default mongoose.model("users", usersSchema);
