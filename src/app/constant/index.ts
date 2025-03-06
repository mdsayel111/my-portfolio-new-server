import authRouter from "../module/auth/route";
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
];
