import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Express, Request, Response } from "express";
import globalErrorHandleMiddleware from "./app/middleware/global-error-handler";
import Hero from "./app/module/Hero/model";
import mainRouter from "./app/router";
import { sendResponse } from "./app/utils/send-response";
import AboutMe from "./app/module/aboutMe/model";
import Experience from "./app/module/Experience/model";
import Education from "./app/module/education/model";
import Skill from "./app/module/Skill/model";
import Project from "./app/module/project/model";
import Contact from "./app/module/contact/model";

// create app
const app: Express = express();

// cors config
app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "http://localhost:5173",
      "https://sayel-portfolio.surge.sh",
      "http://sayel-portfolio-admin.surge.sh",
    ],
    credentials: true,
  }),
);

// add cookie perser middleware
app.use(cookieParser());

// add json parser middleware
app.use(express.json());

// removeFields(["gitLink", "image"])
// addFields({isActive: true})

// add public route
app.get("/api/public", async (req: Request, res: Response) => {
  const banner = await Hero.findOne({});
  const aboutMe = await AboutMe.findOne({});
  const experiences = await Experience.find({ isActive: true });
  const eductations = await Education.find({ isActive: true });
  const skills = await Skill.find({ isActive: true });
  const projects = await Project.find({ isActive: true });
  const contact = await Contact.findOne();
  const data = { banner, aboutMe, experiences, eductations, skills, projects, contact }
  sendResponse(res, {
    data,
    status: 200,
    message: "Data fetched successfully",
  });
});

// adding main roter to appRouter
app.use("/api", mainRouter);

// root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// global error handler
app.use(globalErrorHandleMiddleware);

export default app;
