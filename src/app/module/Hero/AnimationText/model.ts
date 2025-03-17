import mongoose, { model, Schema } from "mongoose";
import { THeroAnimationText } from "./interface";

// create animationText schema
const animationTextSchema = new Schema<THeroAnimationText>(
  {
    text: {
      type: String,
      required: [true, "Text is required!"],
    },
    hero: {
      type: mongoose.Schema.ObjectId,
      required: [true, "Text is required!"],
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { collection: "AnimationTextAnimationText", timestamps: true },
);

// create project model
const AnimationText = model<THeroAnimationText>("AnimationTextAnimationText", animationTextSchema);

export default AnimationText;
