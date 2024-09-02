import { Router } from "express";
import { TRouterObjects } from "../types";

// function to add all router in app
export const addRouter = (routersArr: TRouterObjects, addingRouter: Router) => {
  // map all router objects and add router to adding router
  routersArr.forEach((routerObj) => {
    addingRouter.use(routerObj.path, routerObj.router);
  });
};
