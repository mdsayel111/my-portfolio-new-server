import { model, Schema } from "mongoose";
import { TSkill } from "./interface";

// create aboutMe schema
const skillSchema = new Schema<TSkill>(
  {
    image: { type: String, required: [true, "Title is required!"] },
    name: { type: String, required: [true, "Image is required!"] },
  },
  { timestamps: true },
);

// create project model
const Skill = model<TSkill>("Skill", skillSchema);

export default Skill;
