import express from "express";
import { getAllAuthors, getAuthorId, createAuthor, updateAuthor, deleteAuthor } from "../controllers/authorsController.js";
import {auth, verificarRol} from '../middlewares/middlewares.js';

 const authorRouter = express.Router();

authorRouter.get("/", auth, verificarRol(["admin"]), getAllAuthors);
authorRouter.get("/:id", auth, verificarRol(["admin"]), getAuthorId);
authorRouter.post("/", auth, verificarRol(["admin"]), createAuthor);
authorRouter.put("/:id", auth, verificarRol(["admin"]), updateAuthor);
authorRouter.delete("/:id", auth, verificarRol(["admin"]), deleteAuthor);

export default authorRouter;

