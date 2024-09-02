import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import Project from "./model";
import { sendResponse } from "../../utils/send-response";

// create getAllProject controller
export const getAllProject: RequestHandler = catchAsync(async (req, res) => {
    // get data from DB
    const data = await Project.find({})
    // .sort({ $natural: -1 })
    // .limit(6)

    sendResponse(res, { status: 200, message: "Project retrive successfully!", data })
})