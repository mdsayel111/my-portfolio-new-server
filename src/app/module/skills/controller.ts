import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
import {
  getSkillService,
  getSingleSkillService,
  updateSkillService,
  createSkillService,
} from "./service";

// create new skill controller
export const createSkill: RequestHandler = catchAsync(async (req, res) => {
  const skillData = req.body;

  const data = await createSkillService(skillData);

  sendResponse(res, {
    status: 200,
    message: "Skill created successfully!",
    data,
  });
});

// create getSingleSkill controller
export const getSkill: RequestHandler = catchAsync(async (req, res) => {
  // get query params from req

  const data = await getSkillService();
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
