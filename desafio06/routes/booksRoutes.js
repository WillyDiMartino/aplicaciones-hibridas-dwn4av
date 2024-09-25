import express from "express";
import { getAllBooks, getBookId, createBook, updateBook, deleteBook } from "../controllers/booksController.js";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secretKey = process.env.SECRET;

const auth = (req, res, next) => {

    const getToken = req.headers.authorization;

    if(getToken){
        const token = getToken.split(" ")[1];
        jwt.verify(token, secretKey, (err, paylod) => {
            if(err){
                return res.status(403).json({message: 'Token inválido'});
            }else{
                console.log(paylod);
                req.user = {id: paylod.id, email: paylod.email};
                next();  
            }
        })
    }
} 

const booksRouter = express.Router();

booksRouter.get("/", auth, getAllBooks);
booksRouter.get("/:id", auth, getBookId);
booksRouter.post("/", createBook);
booksRouter.put("/:id", updateBook);
booksRouter.delete("/:id", deleteBook);

export default booksRouter;