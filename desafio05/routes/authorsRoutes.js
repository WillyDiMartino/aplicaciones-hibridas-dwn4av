import express from "express";

import { getAllAuthors, getAuthorId, createAuthor, updateAuthor, deleteAuthor } from "../controllers/authorsController.js";

 const router = express.Router();

router.get("/", getAllAuthors);
router.get("/:id", getAuthorId);
router.post("/", createAuthor);
router.put("/:id", updateAuthor);
router.delete("/:id", deleteAuthor);

