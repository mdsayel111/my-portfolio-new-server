import Resume from "./model";



// create getResume service
export const getResumeService = async () => {
    // get resume data from DB
    const data = await Resume.findOne()

    return data;
};
