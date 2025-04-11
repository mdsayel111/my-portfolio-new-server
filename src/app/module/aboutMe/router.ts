import express from "express";
import auth from "../../middleware/auth";
import { getAboutMe, getSingleAboutMe, updateAboutMe } from "./controller";

// create aboutMe router
const aboutMeRouter = express.Router();

// get all aboutMe route
aboutMeRouter.get("/", getAboutMe);

// get single aboutMe route
aboutMeRouter.get("/:id", getSingleAboutMe);

// update aboutMe route
aboutMeRouter.patch("/:id", auth(), updateAboutMe);

export default aboutMeRouter;
