/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";
import { sendResponse } from "../utils/send-response";
import { TResponse } from "../types";

// create global error handle middleware
const globalErrorHandleMiddleware: ErrorRequestHandler = (
  error,
  req,
  res,
  next,
) => {
  const errorObj: TResponse = {
    status: 400,
    error: error,
    message: error.message,
  };

  // if server not running in production, then send stack
  errorObj.stack = process.env.NODE_ENV === "production" || error.stack;
  sendResponse(res, errorObj);
};

export default globalErrorHandleMiddleware;
