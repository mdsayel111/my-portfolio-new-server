import { model, Schema } from "mongoose";
import { TSkill } from "./interface";

// create skill schema
const skillSchema = new Schema<TSkill>(
  {
    title: { type: String, required: [true, "Title is required!"] },
    image: { type: String, required: [true, "Image is required!"] },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

// create project model
const Skill = model<TSkill>("Skill", skillSchema);

export default Skill;
