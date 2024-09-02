
import projectRouter from "../module/project/router";
import { TRouterObjects } from "../types";

// create all router objects
export const routerObjects: TRouterObjects = [
  { path: "/project", router: projectRouter },
  // { path: "/guest", router: guestRouter },
];
