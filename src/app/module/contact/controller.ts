import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
import {
  getContactService,
  getSingleContactService,
  updateContactService,
} from "./service";

// create getSingleContact controller
export const getContact: RequestHandler = catchAsync(async (req, res) => {
  // get query params from req

  const data = await getContactService();
  sendResponse(res, {
    status: 200,
    message: "About Me retrieve successfully!",
    data,
  });
});

// get single contact controller
export const getSingleContact: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const data = await getSingleContactService(id);

  sendResponse(res, {
    status: 200,
    message: "About Me retrieve successfully!",
    data,
  });
});

// create updateContact controller
export const updateContact: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const contactData = req.body;

  const data = await updateContactService(id, contactData);

  sendResponse(res, {
    status: 200,
    message: "Contact updated successfully!",
    data,
  });
});
