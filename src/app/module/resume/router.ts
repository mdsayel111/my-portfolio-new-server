import express from "express";
import { getResume, updateResume } from "./controller";
import auth from "../../middleware/auth";

// create resume router
const resumeRouter = express.Router();

// resume get route
resumeRouter.get("/", getResume);

// resume update route
resumeRouter.patch("/", auth(), updateResume);

export default resumeRouter;
