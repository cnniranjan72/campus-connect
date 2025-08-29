import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  postedBy: { type: String, required: true },
  validTill: { type: Date, required: true },
}, { timestamps: true });

export default mongoose.model("Notice", noticeSchema);
