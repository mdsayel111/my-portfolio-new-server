import express from "express";
import { getAboutMe, updateAboutMe } from "./controller";
import auth from "../../middleware/auth";
import AboutMe from "./model";

// create aboutMe router
const aboutMeRouter = express.Router();

// get all aboutMe route
aboutMeRouter.get("/", getAboutMe);
aboutMeRouter.post("/",async (req, res) => {
    const data = await AboutMe.create(req.body)
  res.status(200).send({
    status: 200,
    message: "AboutMe created successfully!",
    data
  });
});

// update aboutMe route
aboutMeRouter.patch("/:id", auth(), updateAboutMe);

export default aboutMeRouter;
