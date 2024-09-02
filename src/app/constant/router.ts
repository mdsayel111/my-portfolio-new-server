import adminRouter from "../module/admin/router";
import { TRouterObjects } from "../types/router";

// create all router objects
export const routerObjects: TRouterObjects = [{ path: "/admin", router: adminRouter }, { path: "/user", router: adminRouter }]