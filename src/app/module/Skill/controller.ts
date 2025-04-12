import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
import {
  createSkillService,
  getSingleSkillService,
  getSkillService,
  updateSkillService,
} from "./service";

// create getSingleSkill controller
export const createSkill: RequestHandler = catchAsync(async (req, res) => {
  const skillData = req.body;

  const data = await createSkillService(skillData);

  sendResponse(res, {
    status: 200,
    message: "Skill created successfully!",
    data,
  });
});

export const getSkill: RequestHandler = catchAsync(async (req, res) => {
  // get query params from req

  const data = await getSkillService();
  console.log(data);
  sendResponse(res, {
    status: 200,
    message: "About Me retrieve successfully!",
    data,
  });
});

// get single skill controller
export const getSingleSkill: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const data = await getSingleSkillService(id);

  sendResponse(res, {
    status: 200,
    message: "About Me retrieve successfully!",
    data,
  });
});

// create updateSkill controller
export const updateSkill: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const skillData = req.body;

  const data = await updateSkillService(id, skillData);

  sendResponse(res, {
    status: 200,
    message: "Skill updated successfully!",
    data,
  });
});
