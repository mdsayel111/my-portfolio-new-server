import express from "express";
import { getToken } from "./controller";

// create token router
const tokenRouter = express.Router();

// token get route
tokenRouter.post("/", getToken);

// token update route
// tokenRouter.patch("/", updateToken);

export default tokenRouter;
