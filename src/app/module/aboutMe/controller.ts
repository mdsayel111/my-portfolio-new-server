import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
import { getAboutMeService, updateAboutMeService } from "./service";

// create getSingleAboutMe controller
export const getAboutMe: RequestHandler = catchAsync(async (req, res) => {
  // get query params from req

  const data = await getAboutMeService();
  sendResponse(res, {
    status: 200,
    message: "About Me retrieve successfully!",
    data,
  });
});

// create updateAboutMe controller
export const updateAboutMe: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const aboutMeData = req.body;

  const data = await updateAboutMeService(id, aboutMeData);

  sendResponse(res, {
    status: 200,
    message: "AboutMe updated successfully!",
    data,
  });
});
