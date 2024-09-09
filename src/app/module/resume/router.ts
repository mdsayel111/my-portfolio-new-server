import express from "express";
import { getResume, updateResume } from "./controller";

// create resume router
const resumeRouter = express.Router();

// resume get route
resumeRouter.get("/", getResume);

// resume update route
resumeRouter.patch("/", updateResume);

export default resumeRouter;
