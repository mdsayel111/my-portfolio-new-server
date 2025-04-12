import Project from "../app/module/project/model";

export const removeFields = async (fields: string[]) => {
  try {
    const documents = await Project.find({}).lean(); // lean to get raw JS objects
    if (!documents.length) {
      return;
    }

    console.log("🔍 Trying to remove fields:", fields);

    for (const doc of documents) {
      console.log("\n📄 Document before update:", doc);

      const unsetFields: Record<string, string> = {};
      fields.forEach((field) => {
        unsetFields[field] = "";
      });

      const res = await Project.updateOne({ _id: doc._id }, { $unset: unsetFields });

      console.log("✅ MongoDB update result:", res);

      const updated = await Project.findById(doc._id).lean();
      console.log("📄 Document after update:", updated);
    }

  } catch (err) {
    console.error("🔥 Error while removing fields:", err);
  }
};

export const addFields = async (obj: Record<string, unknown>) => {
  const documents = await Project.find({});
  documents.forEach(async (document) => {
    await Project.findByIdAndUpdate(document._id, { $set: obj }, { new: true });
  });
};
