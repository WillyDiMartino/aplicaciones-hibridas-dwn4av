import fs from 'fs';
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const authorsFilePath = path.join(path.join(path.dirname(__filename)), '../data/books.json');

const readAuthorsFile = () => {
    const data = fs.readFileSync(authorsFilePath, "utf-8");
    return JSON.parse(data);
}

const writeAuthorsFile = (data) => {
    fs.writeFileSync(authorsFilePath, JSON.stringify(data, "utf-8"));
}

export { readAuthorsFile, writeAuthorsFile };