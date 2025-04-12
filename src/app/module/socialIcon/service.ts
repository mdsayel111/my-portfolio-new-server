import { TSocialIcon } from "./interface";
import SocialIcon from "./model";

// create get single socialIcon service
export const getSingleSocialIconService = async (id: string) => {
  // get data
  const data = await SocialIcon.findById(id);

  return data;
};
// create get all socialIcon service
export const getSocialIconService = async () => {
  // get data
  const data = await SocialIcon.find({}).sort({ position: "asc" });

  return data;
};
// update SocialIcon service
export const updateSocialIconService = async (
  id: string,
  socialIconData: TSocialIcon,
  isDelete: boolean,
) => {
  if (isDelete) {
    // delete data in DB
    const data = await SocialIcon.findByIdAndDelete(id);

    return data;
  }
  // update data in DB
  const data = await SocialIcon.findByIdAndUpdate(id, socialIconData, {
    new: true,
  });

  return data;
};

export const createSocialIconService = async (socialIconData: TSocialIcon) => {
  // create new data in DB
  const data = await SocialIcon.create(socialIconData);

  return data;
};
