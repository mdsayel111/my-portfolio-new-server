import { model, Schema } from "mongoose";
import { TContact } from "./interface";

// create contact schema
const contactSchema = new Schema<TContact>(
  {
    address: { type: String, required: [true, "Title is required!"] },
    email: { type: String, required: [true, "Image is required!"] },
    phone: { type: String, required: [true, "Description is required!"] },
  },
  { timestamps: true },
);

// create project model
const Contact = model<TContact>("Contact", contactSchema);

export default Contact;
