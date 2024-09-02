import express, { Express, Request, Response } from "express";

// create app
const app: Express = express();

// add root route
app.get("/", (req: Request, res: Response) => {
    res.send("❤️  Sayel Sayed portfolio ❤️");
});

export default app