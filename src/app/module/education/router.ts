import express from "express";
import auth from "../../middleware/auth";
import {
  createEducation,
  getEducation,
  getSingleEducation,
  updateEducation,
} from "./controller";

// create education router
const educationRouter = express.Router();

// get all education route
educationRouter.get("/", getEducation);

// create new education route
educationRouter.post("/", auth(), createEducation);

// get single education route
educationRouter.get("/:id", getSingleEducation);

// update education route
educationRouter.patch("/:id", auth(), updateEducation);

export default educationRouter;
