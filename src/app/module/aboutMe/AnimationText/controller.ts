import { RequestHandler } from "express";
import {
  createHeroAnimationTextService,
  getHeroAnimationTextService,
  updateHeroAnimationTextService,
} from "./service";
import catchAsync from "../../../../HOF/catch-async";
import { sendResponse } from "../../../utils/send-response";

// create getSingleHeroAnimationText controller
export const getHeroAnimationText: RequestHandler = catchAsync(
  async (_, res) => {
    // get query params from req

    const data = await getHeroAnimationTextService();
    sendResponse(res, {
      status: 200,
      message: "Hero animation text retrieve successfully!",
      data,
    });
  },
);

// create createHeroAnimationText controller
export const createHeroAnimationText: RequestHandler = catchAsync(
  async (req, res) => {
    const heroAnimationTextData = req.body;

    const data = await createHeroAnimationTextService(heroAnimationTextData);

    sendResponse(res, {
      status: 200,
      message: "heroAnimationText create successfully!",
      data,
    });
  },
);

// create updateHeroAnimationText controller
export const updateHeroAnimationText: RequestHandler = catchAsync(
  async (req, res) => {
    const { id } = req.params;
    const heroAnimationTextData = req.body;

    const data = await updateHeroAnimationTextService(
      id,
      heroAnimationTextData,
    );

    sendResponse(res, {
      status: 200,
      message: "HeroAnimationText updated successfully!",
      data,
    });
  },
);
