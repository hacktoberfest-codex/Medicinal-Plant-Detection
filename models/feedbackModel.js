import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    score: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("feed", feedbackSchema);
