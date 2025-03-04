import express from "express";
import { getLoginUserInfo, login } from "./controller";

// create auth router
const authRouter = express.Router();

authRouter.get("/login-user-info", getLoginUserInfo);

// login route
authRouter.post("/login", login);

export default authRouter;
