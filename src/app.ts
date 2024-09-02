import express, { Express, Request, Response } from "express";
import { config } from "./app/config";

// create app
const app: Express = express();
const port = config.port || 3000;

// add root route
app.get("/", (req: Request, res: Response) => {
    res.send("❤️  Sayel Sayed portfolio ❤️");
});

export default app