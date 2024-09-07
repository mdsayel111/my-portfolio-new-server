import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
import { getResumeService } from "./service";

// create getResume controller
export const getResume: RequestHandler = catchAsync(async (req, res) => {

  const data = await getResumeService();

  sendResponse(res, {
    status: 200,
    message: "Project retrive successfully!",
    data,
  });
});
