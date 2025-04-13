import express from "express";
import auth from "../../middleware/auth";
import {
  createSkill,
  getSkill,
  getSingleSkill,
  updateSkill,
} from "./controller";

// create skill router
const skillRouter = express.Router();

// get all skill route
skillRouter.get("/", getSkill);

// create new skill route
skillRouter.post("/", auth(), createSkill);

// get single skill route
skillRouter.get("/:id", getSingleSkill);

// update skill route
skillRouter.patch("/:id", auth(), updateSkill);

export default skillRouter;
