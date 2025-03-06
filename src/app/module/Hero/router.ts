import express from "express";
import { getHero, updateHero } from "./controller";
import auth from "../../middleware/auth";

// create hero router
const heroRouter = express.Router();

// get all hero route
heroRouter.get("/", getHero);

// update hero route
heroRouter.patch("/:id", auth(), updateHero);

export default heroRouter;
