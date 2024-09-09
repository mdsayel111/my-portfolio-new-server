import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
import { getResumeService, updateResumeService } from "./service";

// create getResume controller
export const getResume: RequestHandler = catchAsync(async (req, res) => {
  const data = await getResumeService();

  sendResponse(res, {
    status: 200,
    message: "Resume retrive successfully!",
    data,
  });
});

// create updateResume controller
export const updateResume: RequestHandler = catchAsync(async (req, res) => {
  const resumeData = req.body

  const data = await updateResumeService(resumeData);

  sendResponse(res, {
    status: 200,
    message: "Resume updated successfully!",
    data,
  });
});
