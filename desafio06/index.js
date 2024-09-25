import express from 'express';
import userRoutes from './routes/userRoutes.js';
import booksRoutes from './routes/booksRoutes.js';
import path from "path";
import { fileURLToPath } from 'url';


const app = express();

const port = 3000;

const __filename = fileURLToPath(import.meta.url);

app.use(express.json());
app.use(express.static(path.join(path.dirname(__filename), "public")));


app.get("/", (req, res) => {
    // res.sendFile(path.join(path.dirname(__filename), "public", "index.html"));
    // Al declararse la ruta en el app.use se renderiza el index.html. No obstante, hay que declarar las demás páginas que se quieran mostrar
});

app.get("/libros" , (req, res) =>{
res.sendFile(path.join(path.dirname(__filename), "public", "libros.html"));
});

app.use("/libros", booksRoutes);

app.use('/usuarios', userRoutes);

app.listen(port, () => console.log(`http://localhost:${port}`));