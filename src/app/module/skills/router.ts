import express from "express";
import auth from "../../middleware/auth";
import {
  createExperience,
  getExperience,
  getSingleExperience,
  updateExperience,
} from "./controller";

// create experience router
const experienceRouter = express.Router();

// get all experience route
experienceRouter.get("/", getExperience);

// create new experience route
experienceRouter.post("/", auth(), createExperience);

// get single experience route
experienceRouter.get("/:id", getSingleExperience);

// update experience route
experienceRouter.patch("/:id", auth(), updateExperience);

export default experienceRouter;
