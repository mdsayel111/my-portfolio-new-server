import cors from "cors";
import express, { Express, Request, Response } from "express";
import globalErrorHandleMiddleware from "./app/middleware/global-error-handler";
import mainRouter from "./app/router";



// create app
const app: Express = express();

// cors config
app.use(
  cors({
    origin: ["http://localhost:5173", "https://sayel-portfolio.surge.sh"],
    credentials: true,
  })
);

// adding main roter to appRouter
app.use("/api", mainRouter);

// add root route
app.get("/", (req: Request, res: Response) => {
  res.send("❤️ Sayel Sayed portfolio ❤️");
});

// global error handler
app.use(globalErrorHandleMiddleware)

export default app;
