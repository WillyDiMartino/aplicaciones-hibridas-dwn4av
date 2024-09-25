import { readBooksFile, writeBooksFile } from "../models/booksModel.js";

const getAllBooks = (req, res) => {
    let books = readBooksFile();
    res.status(200).json(books);
};

const getBookId = (req, res) =>{
    const bookId = parseInt(req.params.id);
    let books = readBooksFile();
    const book = books.find(b => b.id === bookId);
    if(!book) return res.status(404).json({message: "Libro no encontrado"});
    res.status(200).json(book);
};

const createBook = (req, res) => {
    const {name, author} = req.body;
    let books = readBooksFile();
    const newBook = {
        id: books.length > 0 ? books.length + 1 : 1,
        name,
        author
    }
    books.push(newBook);
    writeBooksFile(books);
    res.status(201).json(newBook);
};

const updateBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    let books = readBooksFile();
    const bookIndex = books.findIndex(b => b.id === bookId);
    if(bookIndex != -1){
        books[bookIndex] = {id:bookId, ...req.body};
        writeBooksFile(books);
        res.status(200).json(books[bookIndex]);
    }else{
        res.status(404).json({message: "Libro no encontrado"});
    }
};

const deleteBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    let books = readBooksFile();
    const bookIndex = books.findIndex(b => b.id === bookId);
    if(bookIndex != -1){
        books.splice(bookIndex, 1);
        res.status(204).send();
    }else{
        res.status(404).json({message: "Libro no encontrado"});
    }
};

export {getAllBooks, getBookId, createBook, updateBook, deleteBook};