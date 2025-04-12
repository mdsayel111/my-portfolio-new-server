import { model, Schema } from "mongoose";
import { TEducation } from "./interface";

// create aboutMe schema
const educationSchema = new Schema<TEducation>(
  {
    institute: { type: String, required: [true, "Title is required!"] },
    department: { type: String, required: [true, "Image is required!"] },
    from: { type: String, required: [true, "Description is required!"] },
    to: { type: String, required: [true, "Description is required!"] },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

// create project model
const Education = model<TEducation>("Education", educationSchema);

export default Education;
