import fs from 'fs';
import path from 'path';

const booksFilePath = path.join(__dirname, '../data/books.json');

const readBooksFile = () => {
    const data = fs.readFileSync(booksFilePath, "utf-8");
    return JSON.parse(data);
}

const writeBooksFile = (data) => {
    fs.writeFileSync(booksFilePath, JSON.stringify(data, "utf-8"));
}

export { readBooksFile, writeBooksFile };