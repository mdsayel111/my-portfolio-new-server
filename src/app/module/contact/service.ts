import { TContact } from "./interface";
import Contact from "./model";

// create get single contact service
export const getSingleContactService = async (id: string) => {
  // get data
  const data = await Contact.findById(id);

  return data;
};
// create get all contact service
export const getContactService = async () => {
  // get data
  const data = await Contact.findOne({});

  return data;
};
// update Contact service
export const updateContactService = async (
  id: string,
  contactData: TContact,
) => {
  // update data in DB
  const data = await Contact.findByIdAndUpdate(id, contactData, { new: true });

  return data;
};
