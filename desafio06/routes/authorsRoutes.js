import express from "express";

import { getAllAuthors, getAuthorId, createAuthor, updateAuthor, deleteAuthor } from "../controllers/authorsController.js";

 const authorRouter = express.Router();

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:id", getAuthorId);
authorRouter.post("/", createAuthor);
authorRouter.put("/:id", updateAuthor);
authorRouter.delete("/:id", deleteAuthor);

export default authorRouter;

