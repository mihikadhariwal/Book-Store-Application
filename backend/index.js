import express, { json } from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import cors from "cors";

const app = express();

app.use(express.json()); //middleware for parsing request body
app.use(cors());

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

app.post("/book", async (req, res) => {
  try {
    const { title, author, publishyear } = req.body;

    if (!title || !author || !publishyear) {
      return res.send("please fill all the fields");
    }

    const newBook = {
      title,
      author,
      publishyear,
    };

    const book = await Book.create(newBook);
    res.send(book);
  } catch (err) {
    console.log(err);
  }
});

//all books
app.get("/book", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.json(books);
  } catch (err) {
    console.log(err);
  }
});

//book by id
app.get("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json(book);
  } catch (err) {
    console.log(err);
  }
});

//update a book
app.put("/book/:id", async (req, res) => {
  try {
    const { title, author, publishyear } = req.body;
    if (!title || !author || !publishyear) {
      return res.send("please fill all the fields");
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.send("book not found");
    }
    return res.send("updated successfully");
  } catch (err) {
    console.log(err);
  }
});

//delete book
app.delete("/book/:id", async (req, res) => {
  try {
    // const { title, author, publishyear } = req.body;
    // if (!title || !author || !publishyear) {
    //   return res.send("please fill all the fields");
    // }
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id, req.body);

    if (!result) {
      return res.send("book not found");
    }
    return res.send("deleted successfully");
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
