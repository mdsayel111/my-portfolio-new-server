import express from "express";
import { getAllProject, getLeatestProjects } from "./controller";

// create project router
const projectRouter = express.Router();

projectRouter.get("/", getAllProject);
projectRouter.get("/leatest-projects", getLeatestProjects);

export default projectRouter;
