import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema({
  uid: String,
  title: String,
  desc: String,
  tags: [String],
  likes: { type: Number, default: 0 }
});

export default mongoose.model("Idea", ideaSchema);
