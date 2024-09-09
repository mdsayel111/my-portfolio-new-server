import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
// import { getLeatestProjectService } from "./service";

// create getLoginUserInfo controller
export const getLoginUserInfo: RequestHandler = catchAsync(async (req, res) => {
  const data = [];

  sendResponse(res, {
    status: 200,
    message: "Project retrive successfully!",
    data,
  });
});

// create getLeatestProjects controller
// export const getLeatestProjects: RequestHandler = catchAsync(async (req, res) => {

//     const data = await getLeatestProjectService();

//     sendResponse(res, {
//         status: 200,
//         message: "Project retrive successfully!",
//         data,
//     });
// });
