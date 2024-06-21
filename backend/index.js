import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
