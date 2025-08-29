import mongoose from "mongoose";

const timetableSchema = new mongoose.Schema({
  course: { type: String, required: true },
  day: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  room: { type: String, required: true },       // required
  teacher: { type: String, required: true },    // required
}, { timestamps: true });

export default mongoose.model("Timetable", timetableSchema);
