import mongoose from "mongoose";

const plantSchema = new mongoose.Schema(
  {
    scientificName: {
      type: String,
      trim: true,
      unique: true,
    },
    localName: {
      type: String,
      trim: true,
    },
    features: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("plantFeatures", plantSchema);
