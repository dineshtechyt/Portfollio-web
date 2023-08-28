import mongoose from "mongoose";

export const connectDb = () =>
  mongoose.connect(process.env.MONGO_URL).then(
    (c) => {
      console.log("connected");
    },
    (error) => {
      console.log(error);
    }
  );
