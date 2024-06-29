import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email"],
    },
    cell: {
      type: String,
      required: [true, "Please add the contact cell"],
    },
  },
  {
    timestamps: true,
  }
);

export const Contact = mongoose.model("Contact", contactSchema);
