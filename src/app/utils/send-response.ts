import { Response } from "express";
import { TResponse } from "../types";

export const sendResponse = (res: Response, args: TResponse) => {
  res.status(args.status).send(args);
};
