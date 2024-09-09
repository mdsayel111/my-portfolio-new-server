import { model, Schema } from "mongoose";
import { TProject } from "./interface";

// create project schema
const projectSchema = new Schema<TProject>(
  {
    projectName: {
      type: String,
      required: [true, "Project name is required!"],
    },
    imgLink: { type: String, required: [true, "Image link is required!"] },
    description: { type: String, required: [true, "Description is required!"] },
    gitLink: { type: String, required: [true, "Git is required!"] },
    liveLink: { type: String, required: [true, "Live link is required!"] },
    isDeleted: { type: Boolean, default: false },
    isVisible: { type: Boolean, default: true },
    isLeatest: { type: Boolean, default: false },
    position: { type: Number, default: 0 },
  },
  { collection: "Projects", timestamps: true },
);

// create project model
const Project = model<TProject>("Projects", projectSchema);

export default Project;
