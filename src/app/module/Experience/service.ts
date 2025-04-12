import { QueryBuilder } from "../../query-builder";
import { TExperience } from "./interface";
import Experience from "./model";

// create new experience service
export const createExperienceService = async (experienceData: TExperience) => {
  // create new data in DB
  const data = await Experience.create(experienceData);

  return data;
};

// create get single experience service
export const getSingleExperienceService = async (id: string) => {
  // get data
  const data = await Experience.findById(id);

  return data;
};
// create get all experience service
export const getExperienceService = async (query: Record<string, unknown>) => {
  // get data
  const queryModel = new QueryBuilder(Experience.find({ isActive: true }), query);
  
  // apply methods in queryModel
  queryModel.sort(["createAt"]);

  // get data
  const data = await queryModel.queryModel;

  return data;
};

// update Experience service
export const updateExperienceService = async (
  id: string,
  experienceData: TExperience,
  idDelete: boolean
) => {
  // delete data in DB
  if (idDelete) {
    await Experience.findByIdAndDelete(id);
  }
  // update data in DB
  const data = await Experience.findByIdAndUpdate(id, experienceData, {
    new: true,
  });

  return data;
};
