import mongoose from "mongoose";

const plantSchema = new mongoose.Schema(
  {
    score: {
      type: number,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("plantdata", plantSchema);
