/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";
import { sendResponse } from "../utils/send-response";

// create global error handle middleware
const globalErrorHandleMiddleware: ErrorRequestHandler = (
  error,
  req,
  res,
  next,
) => {
  console.log(error)
  sendResponse(res, {
    status: 400,
    error: error,
    message: error.message,
    stack: error.stack,
  });
};

export default globalErrorHandleMiddleware;
