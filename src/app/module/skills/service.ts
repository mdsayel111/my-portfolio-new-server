import { TSkill } from "./interface";
import Skill from "./model";

// create new skill service
export const createSkillService = async (skillData: TSkill) => {
  // create new data in DB
  const data = await Skill.create(skillData);

  return data;
};

// create get single skill service
export const getSingleSkillService = async (id: string) => {
  // get data
  const data = await Skill.findById(id);

  return data;
};
// create get all skill service
export const getSkillService = async () => {
  // get data
  const data = await Skill.find({});

  return data;
};

// update Skill service
export const updateSkillService = async (id: string, skillData: TSkill) => {
  // update data in DB
  const data = await Skill.findByIdAndUpdate(id, skillData, { new: true });

  return data;
};
