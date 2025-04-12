import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
import {
  getEducationService,
  getSingleEducationService,
  updateEducationService,
  createEducationService,
} from "./service";

// create new education controller
export const createEducation: RequestHandler = catchAsync(async (req, res) => {
  const educationData = req.body;

  const data = await createEducationService(educationData);

  sendResponse(res, {
    status: 200,
    message: "Education created successfully!",
    data,
  });
});

// create getSingleEducation controller
export const getEducation: RequestHandler = catchAsync(async (req, res) => {
  // get query params from req
  const query = req.query;

  const data = await getEducationService(query);
  sendResponse(res, {
    status: 200,
    message: "About Me retrieve successfully!",
    data,
  });
});

// get single education controller
export const getSingleEducation: RequestHandler = catchAsync(
  async (req, res) => {
    const { id } = req.params;

    const data = await getSingleEducationService(id);

    sendResponse(res, {
      status: 200,
      message: "About Me retrieve successfully!",
      data,
    });
  },
);

// create updateEducation controller
export const updateEducation: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const educationData = req.body;
  const isDelete =
  (!req.body.isActive && req.body.isActive === false) ? true : false;

  const data = await updateEducationService(id, educationData, isDelete);

  sendResponse(res, {
    status: 200,
    message: "Education updated successfully!",
    data,
  });
});
