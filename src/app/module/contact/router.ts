import express from "express";
import auth from "../../middleware/auth";
import { getContact, getSingleContact, updateContact } from "./controller";

// create contact router
const contactRouter = express.Router();

// get all contact route
contactRouter.get("/", getContact);

// get single contact route
contactRouter.get("/:id", getSingleContact);

// update contact route
contactRouter.patch("/:id", auth(), updateContact);

export default contactRouter;
