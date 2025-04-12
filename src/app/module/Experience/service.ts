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
export const getExperienceService = async () => {
  // get data
  const data = await Experience.find({});

  return data;
};

// update Experience service
export const updateExperienceService = async (
  id: string,
  experienceData: TExperience,
) => {
  // update data in DB
  const data = await Experience.findByIdAndUpdate(id, experienceData, {
    new: true,
  });

  return data;
};
