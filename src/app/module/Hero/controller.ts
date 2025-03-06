import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
import { getHeroService, updateHeroService } from "./service";

// create getSingleHero controller
export const getHero: RequestHandler = catchAsync(async (req, res) => {
  // get query params from req

  const data = await getHeroService();
  sendResponse(res, {
    status: 200,
    message: "Hero retrieve successfully!",
    data,
  });
});

// create updateHero controller
export const updateHero: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const heroData = req.body;

  const data = await updateHeroService(id, heroData);

  sendResponse(res, {
    status: 200,
    message: "Hero updated successfully!",
    data,
  });
});
