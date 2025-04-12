import express from "express";
import auth from "../../middleware/auth";
import {
  getSocialIcon,
  getSingleSocialIcon,
  updateSocialIcon,
  createSocialIcon,
} from "./controller";

// create socialIcon router
const socialIconRouter = express.Router();

// get all socialIcon route
socialIconRouter.get("/", getSocialIcon);

socialIconRouter.post("/", auth(), createSocialIcon);

// get single socialIcon route
socialIconRouter.get("/:id", getSingleSocialIcon);

// update socialIcon route
socialIconRouter.patch("/:id", auth(), updateSocialIcon);

export default socialIconRouter;
