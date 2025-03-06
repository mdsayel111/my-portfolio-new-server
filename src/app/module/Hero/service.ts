import { THero } from "./interface";
import Hero from "./model";

// create get all hero service
export const getHeroService = async () => {
  // get data
  const data = await Hero.findOne({});

  return data;
};
// update heros service
export const updateHeroService = async (id: string, heroData: THero) => {
  // update data in DB
  const data = await Hero.findByIdAndUpdate(id, heroData, { new: true });

  return data;
};
