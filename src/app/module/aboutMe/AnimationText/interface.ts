import mongoose from "mongoose";

// create project type
export type THeroAnimationText = {
  _id: string;
  text: string;
  hero: mongoose.ObjectId;
  isActive: boolean;
};
