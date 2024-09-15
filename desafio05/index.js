import express from "express";

import booksRoutes from "./routes/booksRoutes.js";
import authorsRoutes from "./routes/authorsRoutes.js"; 

const app = express();

const port = 3000;

app.use(express.json());

app.use("/books", booksRoutes);
app.use("/authors", authorsRoutes);

app.listen(port, () => console.log(`http://localhost:${port}`));