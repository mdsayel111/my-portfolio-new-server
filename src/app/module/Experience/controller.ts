import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
import {
  getExperienceService,
  getSingleExperienceService,
  updateExperienceService,
  createExperienceService,
} from "./service";

// create new experience controller
export const createExperience: RequestHandler = catchAsync(async (req, res) => {
  const experienceData = req.body;

  const data = await createExperienceService(experienceData);

  sendResponse(res, {
    status: 200,
    message: "Experience created successfully!",
    data,
  });
});

// create getSingleExperience controller
export const getExperience: RequestHandler = catchAsync(async (req, res) => {
  // get query params from req
  const query = req.query;

  const data = await getExperienceService(query);
  sendResponse(res, {
    status: 200,
    message: "About Me retrieve successfully!",
    data,
  });
});

// get single experience controller
export const getSingleExperience: RequestHandler = catchAsync(
  async (req, res) => {
    const { id } = req.params;

    const data = await getSingleExperienceService(id);

    sendResponse(res, {
      status: 200,
      message: "About Me retrieve successfully!",
      data,
    });
  },
);

// create updateExperience controller
export const updateExperience: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const experienceData = req.body;
  const isDelete =
    !req.body.isActive && req.body.isActive === false ? true : false;

  const data = await updateExperienceService(id, experienceData, isDelete);

  sendResponse(res, {
    status: 200,
    message: "Experience updated successfully!",
    data,
  });
});
