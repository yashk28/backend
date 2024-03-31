import dotenv from "dotenv";
// require('dotenv').config({path:'./env'})
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.port || 8000, () => {
      console.log(`Server connected on port : ${process.env.port}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB connection failed: ${err}`);
  });

// import { express } from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// const app = express();
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("Error: ",error);
//             throw error;
//         })

//         app.listen(process.env.PORT, ()=> {
//             console.log('app is listening on port: ', process.env.PORT)
//         })
//     }catch(error) {
//         console.error("Error:", error);
//         throw error
//     }
// })()
