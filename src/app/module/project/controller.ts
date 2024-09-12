import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
import {
  createProjectService,
  deleteProjectService,
  getAllProjectService,
  getLeatestProjectService,
  updateProjectService,
} from "./service";

// create getAllProject controller
export const getAllProject: RequestHandler = catchAsync(async (req, res) => {
  // get query params from req
  const query = req.query;

  const data = await getAllProjectService(query);

  sendResponse(res, {
    status: 200,
    message: "Project retrive successfully!",
    data,
  });
});

// create getLeatestProjects controller
export const getLeatestProjects: RequestHandler = catchAsync(
  async (req, res) => {
    const data = await getLeatestProjectService();

    sendResponse(res, {
      status: 200,
      message: "Project retrive successfully!",
      data,
    });
  },
);

// create createProject controller
export const createProject: RequestHandler = catchAsync(async (req, res) => {
  const projectData = req.body;

  const data = await createProjectService(projectData);

  sendResponse(res, {
    status: 200,
    message: "Project create successfully!",
    data,
  });
});

// create updateProject controller
export const updateProject: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const projectData = req.body;

  const data = await updateProjectService(id, projectData);

  sendResponse(res, {
    status: 200,
    message: "Project updated successfully!",
    data,
  });
});

// create deleteProject controller
export const deleteProject: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const data = await deleteProjectService(id);

  sendResponse(res, {
    status: 200,
    message: "Project deleted successfully!",
    data,
  });
});
