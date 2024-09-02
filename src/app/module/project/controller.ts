import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
import { getAllProjectService } from "./service";

// create getAllProject controller
export const getAllProject: RequestHandler = catchAsync(async (req, res) => {
  // get query params from req
  const query = req.query

  const data = await getAllProjectService(query)

  sendResponse(res, {
    status: 200,
    message: "Project retrive successfully!",
    data,
  });
});
