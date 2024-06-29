import asyncHandler from "express-async-handler";
import { Contact } from "../models/contactModel.js";

export const getAllContacts = asyncHandler(async(req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

export const postContact = asyncHandler(async(req, res) => {
  console.log(req.body);
  const {name, email, cell} = req.body;

  if(!name || !email || !cell){
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const contact = await Contact.create({
    name,
    email,
    cell
  });

  res.status(201).json({
    data: contact
  })
});

export const getContact = asyncHandler(async(req, res) => {
  const contact = await Contact.findById(req.params.id);

  if(!contact){
    res.status(404);
    throw new Error("Contact not found!");
  }

  res.status(200).json({
    data: contact,
  });
});

export const updateContact = asyncHandler(async(req, res) => {
  const contact = await Contact.findById(req.params.id);

  if(!contact){
    res.status(404);
    throw new Error("Contact not found!");
  } 

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  );

  res.status(200).json({
    data: updatedContact,
  });
});

export const deleteContact = asyncHandler(async(req, res) => {
  const contact = await Contact.findById(req.params.id);

  if(!contact){
    res.status(404);
    throw new Error("Contact not found!");
  }

  const result = await Contact.findByIdAndDelete(req.params.id);

  res.status(200).json({
    data: result,
  });
});
