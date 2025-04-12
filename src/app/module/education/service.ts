import { QueryBuilder } from "../../query-builder";
import { TEducation } from "./interface";
import Education from "./model";

// create new education service
export const createEducationService = async (educationData: TEducation) => {
  // create new data in DB
  const data = await Education.create(educationData);

  return data;
};

// create get single education service
export const getSingleEducationService = async (id: string) => {
  // get data
  const data = await Education.findById(id);

  return data;
};
// create get all education service
export const getEducationService = async (query: Record<string, unknown>) => {
  // get data
  const queryModel = new QueryBuilder(
    Education.find({ isActive: true }),
    query,
  );

  // apply methods in queryModel
  queryModel.sort(["createAt"]);

  // get data
  const data = await queryModel.queryModel;

  return data;
};

// update Education service
export const updateEducationService = async (
  id: string,
  educationData: TEducation,
  idDelete: boolean,
) => {
  // delete data in DB
  if (idDelete) {
    await Education.findByIdAndDelete(id);
  }
  // update data in DB
  const data = await Education.findByIdAndUpdate(id, educationData, {
    new: true,
  });

  return data;
};
