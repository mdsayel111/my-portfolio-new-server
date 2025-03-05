import Project from "../app/module/project/model";

export const removeFields = async (fields: string[]) => {
  const documents = await Project.find({});
  documents.forEach(async (document) => {
    const updateFiled: Record<string, number> = {};
    fields.forEach((field) => {
      updateFiled[field] = 1;
    });
    await Project.findByIdAndUpdate(
      document._id,
      { $unset: updateFiled },
      { new: true },
    );
  });
};
export const addFields = async (obj: Record<string, unknown>) => {
  const documents = await Project.find({});
  documents.forEach(async (document) => {
    await Project.findByIdAndUpdate(document._id, { $set: obj }, { new: true });
  });
};
