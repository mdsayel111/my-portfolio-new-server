import { RequestHandler } from "express";
import catchAsync from "../../../HOF/catch-async";
import { sendResponse } from "../../utils/send-response";
import {
  createProjectService,
  deleteProjectService,
  getAllProjectService,
  getLeatestProjectService,
  getSingleProjectService,
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

// create getSingleProject controller
export const getSingleProject: RequestHandler = catchAsync(async (req, res) => {
  // get query params from req
  const { id } = req.params;

  const data = await getSingleProjectService(id);
  sendResponse(res, {
    status: 200,
    message: "Project retrieve successfully!",
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
  const isDelete = req.body.isActive && req.body.isActive === false ? true : false;
  console.log(isDelete)

  const data = await updateProjectService(id, projectData, isDelete);

  sendResponse(res, {
    status: 200,
    message: "Project updated successfully!",
    data: data,
  });
});

// create deleteProject controller
// export const deleteProject: RequestHandler = catchAsync(async (req, res) => {
//   const { id } = req.params;

//   const data = await deleteProjectService(id);

//   sendResponse(res, {
//     status: 200,
//     message: "Project deleted successfully!",
//     data,
//   });
// });
