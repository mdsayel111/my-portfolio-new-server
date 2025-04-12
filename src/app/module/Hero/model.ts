import { model, Schema } from "mongoose";
import { THero } from "./interface";

// create hero schema
const heroSchema = new Schema<THero>(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
    },
    title: { type: String, required: [true, "Title is required!"] },
    image: { type: String, required: [true, "Image is required!"] },
    description: { type: String, required: [true, "Description is required!"] },
  },
  { timestamps: true },
);

// create project model
const Hero = model<THero>("Hero", heroSchema);

export default Hero;
