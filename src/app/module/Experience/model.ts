import { model, Schema } from "mongoose";
import { TExperience } from "./interface";

// create aboutMe schema
const experienceSchema = new Schema<TExperience>(
  {
    company: { type: String, required: [true, "Title is required!"] },
    position: { type: String, required: [true, "Image is required!"] },
    from: { type: String, required: [true, "Description is required!"] },
    to: { type: String, required: [true, "Description is required!"] },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

// create project model
const Experience = model<TExperience>("Experience", experienceSchema);

export default Experience;
