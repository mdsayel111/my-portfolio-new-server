import authRouter from "../module/auth/route";
import projectRouter from "../module/project/router";
import resumeRouter from "../module/resume/router";
import { TRouterObjects } from "../types";

// create all router objects
export const routerObjects: TRouterObjects = [
  { path: "/project", router: projectRouter },
  { path: "/auth", router: authRouter },
  { path: "/resume", router: resumeRouter },
];
