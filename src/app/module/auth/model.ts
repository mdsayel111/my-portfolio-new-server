import { model, Schema } from "mongoose";
import TUser from "./interface";

// create resume schema
const userSchema = new Schema<TUser>(
  {
    email: {
      type: String,
      required: [true, "Email is required!"],
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
    role: { type: String, default: "admin" },
  },
  { collection: "Users", timestamps: true },
);

// create resume model
const User = model<TUser>("User", userSchema);

export default User;
