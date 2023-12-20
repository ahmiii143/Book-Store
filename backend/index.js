import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();

//middleware for parsing request body
app.use(express.json());
app.use(cors());

//middleware for handling cors
// app.use(
//   cors({
//     origin: "http:localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome To Book Store");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to DATABASE");
    app.listen(PORT, () => {
      console.log(`hello from the ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
