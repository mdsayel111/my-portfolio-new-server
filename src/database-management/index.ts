import Project from "../app/module/project/model";

export const removeFields = async (fields: string[]) => {
  const documents = await Project.find({}).lean(); // lean to get raw JS objects
  if (!documents.length) {
    return;
  }

  for (const doc of documents) {
    const unsetFields: Record<string, string> = {};
    fields.forEach((field) => {
      unsetFields[field] = "";
    });

    await Project.updateOne({ _id: doc._id }, { $unset: unsetFields });

    await Project.findById(doc._id).lean();
  }
};

export const addFields = async (obj: Record<string, unknown>) => {
  const documents = await Project.find({});
  documents.forEach(async (document) => {
    await Project.findByIdAndUpdate(document._id, { $set: obj }, { new: true });
  });
};
