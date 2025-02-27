import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { getTokenService } from "./service";

// create getToken controller
export const getToken: RequestHandler = catchAsync(async (req, res) => {
  const authData = req.body;
  await getTokenService(authData, res);
});

// create updateToken controller
// export const updateToken: RequestHandler = catchAsync(async (req, res) => {
//   const tokenData = req.body;

//   const data = await updateTokenService(tokenData);

//   sendResponse(res, {
//     status: 200,
//     message: "Token updated successfully!",
//     data,
//   });
// });
