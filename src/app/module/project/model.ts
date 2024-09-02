import { model, Schema } from "mongoose";
import { TProject } from "./interface";

// create project schema
const projectSchema = new Schema<TProject>(
  {
    projectName: String,
    imgLink: String,
    description: String,
    gitLink: String,
    liveLink: String,
    isDeleted: Boolean
  },
  { collection: "Projects" },
);

// create project model
const Project = model<TProject>("Projects", projectSchema);

export default Project;
