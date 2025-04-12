import aboutMeRouter from "../module/aboutMe/router";
import authRouter from "../module/auth/route";
import educationRouter from "../module/education/router";
import experienceRouter from "../module/Experience/router";
import heroRouter from "../module/Hero/router";
import projectRouter from "../module/project/router";
import resumeRouter from "../module/resume/router";
import tokenRouter from "../module/token/router";
import { TRouterObjects } from "../types";

// create all router objects
export const routerObjects: TRouterObjects = [
  { path: "/projects", router: projectRouter },
  { path: "/auth", router: authRouter },
  { path: "/resume", router: resumeRouter },
  { path: "/token", router: tokenRouter },
  { path: "/hero", router: heroRouter },
  { path: "/aboutMe", router: aboutMeRouter },
  { path: "/experience", router: experienceRouter },
  { path: "/education", router: educationRouter },
];
