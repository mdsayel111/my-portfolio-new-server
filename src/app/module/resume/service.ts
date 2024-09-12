import TResume from "./interface";
import Resume from "./model";

// create getResume service
export const getResumeService = async () => {
  // get resume data from DB
  const data = await Resume.findOne();

  return data;
};

// create update resume service
export const updateResumeService = async (resumeData: TResume) => {
  // get resume data from DB
  const data = await Resume.findOneAndUpdate({}, resumeData, { new: true });

  return data;
};
