import express from "express";
import { getResume } from "./controller";

// create resume router
const resumeRouter = express.Router();

resumeRouter.get("/", getResume);

export default resumeRouter;
