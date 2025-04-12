import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
import {
  getSocialIconService,
  getSingleSocialIconService,
  updateSocialIconService,
  createSocialIconService,
} from "./service";

// create getSingleSocialIcon controller
export const getSocialIcon: RequestHandler = catchAsync(async (req, res) => {
  // get query params from req

  const data = await getSocialIconService();
  sendResponse(res, {
    status: 200,
    message: "About Me retrieve successfully!",
    data,
  });
});

// get single socialIcon controller
export const getSingleSocialIcon: RequestHandler = catchAsync(
  async (req, res) => {
    const { id } = req.params;

    const data = await getSingleSocialIconService(id);

    sendResponse(res, {
      status: 200,
      message: "About Me retrieve successfully!",
      data,
    });
  },
);

// create updateSocialIcon controller
export const updateSocialIcon: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const socialIconData = req.body;
  const isDelete =
    !req.body.isActive && req.body.isActive === false ? true : false;

  const data = await updateSocialIconService(id, socialIconData, isDelete);

  sendResponse(res, {
    status: 200,
    message: "SocialIcon updated successfully!",
    data,
  });
});

export const createSocialIcon: RequestHandler = catchAsync(async (req, res) => {
  const socialIconData = req.body;

  const data = await createSocialIconService(socialIconData);

  sendResponse(res, {
    status: 200,
    message: "SocialIcon created successfully!",
    data,
  });
});
