import fs from 'fs';
import path from 'path';

const authorsFilePath = path.join(__dirname, '../data/authors.json');

const readAuthorsFile = () => {
    const data = fs.readFileSync(authorsFilePath, "utf-8");
    return JSON.parse(data);
}

const writeAuthorsFile = (data) => {
    fs.writeFileSync(authorsFilePath, JSON.stringify(data, "utf-8"));
}

export { readAuthorsFile, writeAuthorsFile };