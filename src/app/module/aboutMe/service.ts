import { TAboutMe } from "./interface";
import AboutMe from "./model";

// create get all aboutMe service
export const getAboutMeService = async () => {
  // get data
  const data = await AboutMe.findOne({});

  return data;
};
// update AboutMe service
export const updateAboutMeService = async (
  id: string,
  aboutMeData: TAboutMe,
) => {
  // update data in DB
  const data = await AboutMe.findByIdAndUpdate(id, aboutMeData, { new: true });

  return data;
};
