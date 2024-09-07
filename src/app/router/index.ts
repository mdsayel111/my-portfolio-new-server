import express from "express";
import { addRouter } from "../utils/router";
import { routerObjects } from "../constant";

// create main router and all router will be added with this router
const mainRouter = express.Router();

// add all router with this main router
addRouter(routerObjects, mainRouter);

export default mainRouter;
