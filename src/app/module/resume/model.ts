import { model, Schema } from "mongoose";
import TResume from "./interface";

// create resume schema
const resumeSchema = new Schema<TResume>(
  {
    resumeDownloadLink: {
      type: String,
      required: [true, "Project name is required!"],
    },
    resumeImgLink: {
      type: String,
      required: [true, "Image link is required!"],
    },
    resumeLink: { type: String, required: [true, "Description is required!"] },
  },
  { collection: "Resume", timestamps: true },
);

// create resume model
const Resume = model<TResume>("Resume", resumeSchema);

export default Resume;
