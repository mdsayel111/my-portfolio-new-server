import { model, Schema } from "mongoose";
import { TAboutMe } from "./interface";

// create aboutMe schema
const aboutMeSchema = new Schema<TAboutMe>(
  {
    title: { type: String, required: [true, "Title is required!"] },
    image: { type: String, required: [true, "Image is required!"] },
    description: { type: String, required: [true, "Description is required!"] },
  },
  { timestamps: true },
);

// create project model
const AboutMe = model<TAboutMe>("AboutMe", aboutMeSchema);

export default AboutMe;
