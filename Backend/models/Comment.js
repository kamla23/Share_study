import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  ideaId: String,
  uid: String,
  txt: String
});

export default mongoose.model("Comment", commentSchema);
