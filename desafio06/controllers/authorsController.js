import {readAuthorsFile, writeAuthorsFile} from "../models/authorsModel.js";

const getAllAuthors = (req, res) => {
    let authors = readAuthorsFile();
    res.status(200).json(authors);
};

const getAuthorId = (req, res) => {
    const authorId = parseInt(req.params.id);
    let authors = readAuthorsFile();
    const author = authors.find(a => a.id === authorId);
    if(!author) return res.status(404).json({message:"Autor no encontrado"});
    res.status(200).json(author);
};

const createAuthor = (req, res) => {
    let authors = readAuthorsFile();
    const newAuthor = {
        id: authors.length > 0 ? authors.length + 1 : 1,
        name: req.body.name
    };
    authors.push(newAuthor);
    writeAuthorsFile(authors);
    res.status(201).json(newAuthor);
};

const updateAuthor = (req, res) => {
    const authorId = parseInt(req.params.id);
    let authors = readAuthorsFile();
    const authorIndex = authors.findIndex(a => a.id === authorId);
    if (authorIndex != -1){
        authors[authorIndex] = {id:authorId, ...req.body};
        writeAuthorsFile(authors);
        res.status(200).json(authors[authorIndex]);
    }else{
        res.status(404).json({message: "Autor no encontrado"});
    }
};

const deleteAuthor = (req, res) => {
    const authorId = parseInt(req.params.id);
    let authors = readAuthorsFile();
    const authorIndex = authors.findIndex(a => a.id === authorId);
    if (authorIndex != -1){
        authors.splice(authorIndex, 1);
        res.status(204).send();
    }else{
        res.status(404).json({message: "Autor no encontrado"});
    }
};

export {getAllAuthors, getAuthorId, createAuthor, updateAuthor, deleteAuthor};