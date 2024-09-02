/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";
import { sendResponse } from "../utils/send-response";

// create global error handle middleware
const globalErrorHandleMiddleware: ErrorRequestHandler = (error, req, res, next) => {
    sendResponse(res, { status: 400, message: error.message, stack: error.stack })
}

export default globalErrorHandleMiddleware