import express, { json } from "express";
import cors from "cors";
import { connectDb } from "./dbConnect/db.js";
import { userController } from "./controller/userController.js";
import { config } from "dotenv";
import dotenv from 'dotenv'
const app = express();
dotenv.config();
const port = process.env.PORT||8080;
connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post("/api/user/contact", userController);

app.listen(port, () => {
  console.log(`listening on the port ${port}`);
});
