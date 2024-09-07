import express from "express";
import { getLoginUserInfo } from "./controller";

// create auth router
const authRouter = express.Router();

authRouter.get("/login-user-info", getLoginUserInfo);

export default authRouter;
