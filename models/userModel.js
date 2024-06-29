import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a username!"],
    },
    email: {
      type: String,
      required: [true, "Please add a email!"],
      unique: [true, "Email must be unique!"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
