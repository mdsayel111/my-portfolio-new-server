import express from "express";
import {
  createProject,
  deleteProject,
  getAllProject,
  getLeatestProjects,
  updateProject,
} from "./controller";

// create project router
const projectRouter = express.Router();

// get all project route
projectRouter.get("/", getAllProject);

// get leatest project route
projectRouter.get("/leatest-projects", getLeatestProjects);

// create project route
projectRouter.post("/", createProject);

// get single project route
projectRouter.get("/:id", updateProject);

// update project route
projectRouter.patch("/:id", updateProject);

// delete project route
projectRouter.delete("/:id", deleteProject);

export default projectRouter;
