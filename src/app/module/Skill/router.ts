import express from "express";
import auth from "../../middleware/auth";
import {
  getSkill,
  getSingleSkill,
  updateSkill,
  createSkill,
} from "./controller";

// create skill router
const skillRouter = express.Router();

// get all skill route
skillRouter.get("/", getSkill);
skillRouter.post("/", auth(), createSkill);

// get single skill route
skillRouter.get("/:id", getSingleSkill);

// update skill route
skillRouter.patch("/:id", auth(), updateSkill);

export default skillRouter;
