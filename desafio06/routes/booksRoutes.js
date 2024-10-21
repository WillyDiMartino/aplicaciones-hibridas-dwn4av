import express from "express";
import { getAllBooks, getBookId, createBook, updateBook, deleteBook } from "../controllers/booksController.js";
import dotenv from 'dotenv';
import {auth, verificarRol} from '../middlewares/middlewares.js';

dotenv.config();

const secretKey = process.env.SECRET;

const booksRouter = express.Router();

booksRouter.get("/", auth, verificarRol(["admin"]), getAllBooks);
booksRouter.get("/:id", auth, verificarRol(["admin"]), getBookId);
booksRouter.post("/", auth, verificarRol(["admin"]), createBook);
booksRouter.put("/:id", auth, verificarRol(["admin"]), updateBook);
booksRouter.delete("/:id", auth, verificarRol(["admin"]), deleteBook);

export default booksRouter;