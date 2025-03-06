import { QueryBuilder } from "../../query-builder";
import { TProject } from "./interface";
import Project from "./model";

// create get all project service
export const getAllProjectService = async (query: Record<string, unknown>) => {
  // create query builder instance
  const queryModel = new QueryBuilder(Project.find({isActive: true}), query);

  // apply methods in queryModel
  queryModel.sort(["createAt"]);

  // get data
  const data = await queryModel.queryModel;

  return data;
};

// create get single project service
export const getSingleProjectService = async (id: string) => {
  // find project
  const data = await Project.findById(id);

  return data;
};

// create get all leatest projects service
export const getLeatestProjectService = async () => {
  // get data from DB
  const data = Project.find({ isLeatest: true }).sort({ position: "asc" });

  return data;
};

// create projects service
export const createProjectService = async (projectData: TProject) => {
  // insert data into DB
  const data = await Project.create(projectData);

  return data;
};

// update projects service
export const updateProjectService = async (
  id: string,
  projectData: TProject,
) => {
  // update data in DB
  const data = await Project.findByIdAndUpdate(id, projectData, { new: true });

  return data;
};

// delete projects service
export const deleteProjectService = async (id: string) => {
  // update data in DB
  const data = await Project.findByIdAndDelete(id, { new: true });

  return data;
};
