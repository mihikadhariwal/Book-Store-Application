import mongoose from "mongoose";

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  publishyear: Number,
});

export const Book = mongoose.model("Book", bookSchema);
