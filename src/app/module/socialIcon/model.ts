import { model, Schema } from "mongoose";
import { TSocialIcon } from "./interface";

// create socialIcon schema
const socialIconSchema = new Schema<TSocialIcon>(
  {
    name: { type: String, required: [true, "Title is required!"] },
    link: { type: String, required: [true, "Image is required!"] },
    position: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

// create project model
const SocialIcon = model<TSocialIcon>("SocialIcon", socialIconSchema);

export default SocialIcon;
