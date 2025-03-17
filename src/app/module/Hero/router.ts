import express from "express";
import { getHero, updateHero } from "./controller";
import auth from "../../middleware/auth";
import heroAnimationTextRouter from "./AnimationText/router";

// create hero router
const heroRouter = express.Router();

heroRouter.use("/heroAnimationText", heroAnimationTextRouter)

// get all hero route
heroRouter.get("/", getHero);

// update hero route
heroRouter.patch("/:id", auth(), updateHero);

export default heroRouter;
