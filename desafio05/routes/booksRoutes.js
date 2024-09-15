import express from "express";

import { getAllBooks, getBookId, createBook, updateBook, deleteBook } from "../controllers/booksController.js";

 const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getBookId);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

