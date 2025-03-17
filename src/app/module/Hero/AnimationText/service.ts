import { THeroAnimationText } from "./interface";
import HeroAnimationText from "./model";

// create get all heroAnimationText service
export const getHeroAnimationTextService = async () => {
  // get data
  const data = await HeroAnimationText.find({ isActive: true });

  return data;
};

// create projects service
export const createHeroAnimationTextService = async (animationTextData: THeroAnimationText) => {
  // insert data into DB
  const data = await HeroAnimationText.create(animationTextData);

  return data;
};

// update heroAnimationTexts service
export const updateHeroAnimationTextService = async (id: string, heroAnimationTextData: THeroAnimationText) => {
  // update data in DB
  const data = await HeroAnimationText.findByIdAndUpdate(id, heroAnimationTextData, { new: true });

  return data;
};
