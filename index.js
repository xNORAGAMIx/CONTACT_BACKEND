import express from "express";
import dotenv from "dotenv";
import contactRoute from "./routes/contactRoute.js";
import userRoute from "./routes/userRoute.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { connectDb } from "./config/dbConnection.js";

dotenv.config();

connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts", contactRoute);
app.use("/api/users", userRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
