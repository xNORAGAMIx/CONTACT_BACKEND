import express from "express";
import {
  getAllContacts,
  postContact,
  getContact,
  updateContact,
  deleteContact,
} from "../controllers/contactControllers.js";

const router = express.Router();

router
    .route("/")
    .get(getAllContacts)
    .post(postContact);

router
    .route("/:id")
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);

export default router;
