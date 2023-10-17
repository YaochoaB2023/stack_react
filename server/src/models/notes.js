import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { 
        type: String, 
        required: true 
    },
    writer: { 
        type: String, 
        required: true 
    },
    date: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Note", noteSchema);