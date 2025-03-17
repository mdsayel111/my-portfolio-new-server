import express from "express";
import {
  createHeroAnimationText,
  getHeroAnimationText,
  updateHeroAnimationText,
} from "./controller";
import auth from "../../../middleware/auth";

// create heroAnimationText router
const heroAnimationTextRouter = express.Router();

// get all heroAnimationText route
heroAnimationTextRouter.get("/", getHeroAnimationText);

//
// create all heroAnimationText route
heroAnimationTextRouter.post("/", createHeroAnimationText);

// update heroAnimationText route
heroAnimationTextRouter.patch("/:id", auth(), updateHeroAnimationText);

export default heroAnimationTextRouter;
