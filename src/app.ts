import express, { Express, Request, Response } from "express";
import mainRouter from "./app/router";

// create app
const app: Express = express();

// app router
const appRouter = express.Router()

// adding main roter to appRouter
appRouter.use("/api", mainRouter)

// add root route
app.get("/", (req: Request, res: Response) => {
  res.send("❤️  Sayel Sayed portfolio ❤️");
});

export default app;
