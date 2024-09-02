import express from "express";
import { getAllProject } from "./controller";

// create admin router
const projectRouter = express.Router();

projectRouter.get("/", getAllProject)

export default projectRouter;
