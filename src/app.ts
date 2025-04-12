import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Express, Request, Response } from "express";
import globalErrorHandleMiddleware from "./app/middleware/global-error-handler";
import Hero from "./app/module/Hero/model";
import mainRouter from "./app/router";
import { sendResponse } from "./app/utils/send-response";

// create app
const app: Express = express();

// cors config
app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "http://localhost:5173",
      "https://sayel-portfolio.surge.sh",
    ],
    credentials: true,
  }),
);

// add cookie perser middleware
app.use(cookieParser());

// add json parser middleware
app.use(express.json());

// removeFields(["gitLink", "image"])
// addFields({isActive: true})

// add public route
app.get("/api/public", async (req: Request, res: Response) => {
  const banner = await Hero.findOne({});
  sendResponse(res, {
    status: 200,
    data: { banner },
    message: "Data fetched successfully",
  });
});

// adding main roter to appRouter
app.use("/api", mainRouter);

// root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// global error handler
app.use(globalErrorHandleMiddleware);

export default app;
