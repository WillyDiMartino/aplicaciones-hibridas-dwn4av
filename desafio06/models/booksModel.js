import fs from 'fs';
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const booksFilePath = path.join(path.join(path.dirname(__filename)), '../data/books.json');

const readBooksFile = () => {
    const data = fs.readFileSync(booksFilePath, "utf-8");
    return JSON.parse(data);
}

const writeBooksFile = (data) => {
    fs.writeFileSync(booksFilePath, JSON.stringify(data, "utf-8"));
}

export { readBooksFile, writeBooksFile };