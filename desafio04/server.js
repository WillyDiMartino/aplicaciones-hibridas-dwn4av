import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const materia = {
    alumno: 'Guillermo Di Martino',
    nombre: 'Aplicaciones Híbridas',
    comision: 'DWN4AV',
    profesor: 'Camila Belén Marcos Galban',
};

app.get('/', (req, res) => {
    res.send(`${materia.alumno}`);
});

app.get('/materia', (req, res) => {
    res.send(`La materia es: ${materia.nombre} de la comisión: ${materia.comision}`);
});

app.get('/profesor', (req, res) => {
    res.send(`La profesora se llama: ${materia.profesor}`);
});



const peliculas = [
    {
        id: 1,
        nombre: 'Titanic',
        director: 'James Cameron',
        genero: 'Romance',
        año: 1997
    },
    {
        id: 2,
        nombre: 'El Padrino',
        director: 'Francis Ford Coppola',
        genero: 'Drama',
        año: 1972
    },
    {
        id: 3,
        nombre: 'El Señor de los Anillos',
        director: 'Peter Jackson',
        genero: 'Fantasía',
        año: 2001
    },
    {
        id: 4,
        nombre: 'Harry Potter',
        director: 'Chris Columbus',
        genero: 'Fantasía',
        año: 2001
    },
    {
        id: 5,
        nombre: 'Interestelar',
        director: 'Christopher Nolan',
        genero: 'Ciencia Ficción',
        año: 2014
    }
];

app.get('/peliculas/:nombre', (req, res) => {
    const peliculaNombre = req.params.nombre;
    const pelicula = peliculas.find(peli => peli.nombre.toLocaleLowerCase() === peliculaNombre.toLocaleLowerCase());
    if (!pelicula) return res.send('Pelicula no encontrada');
    res.send(`La película ${pelicula.nombre} ("${pelicula.genero}") del director ${pelicula.director}, fue agregada a favoritos`);
});

const productos = [{
    id: 1,
    nombre: 'Escuadra',
    precio: 10
},
{
    id: 2,
    nombre: 'Calculadora',
    precio: 300
},
{
    id: 3,
    nombre: 'Globo Terráqueo',
    precio: 250
},
{
    id: 4,
    nombre: 'Paleta Pintura',
    precio: 60
},
{
    id: 5,
    nombre: 'Reloj',
    precio: 1000
},
{
    id:6,
    nombre: 'Mochila',
    precio: 300
},
{
    id:7,
    nombre: 'Cuaderno',
    precio: 60
},
{
    id:8,
    nombre: 'Lápiz',
    precio: 10
},
{
    id:9,
    nombre: 'Borrador',
    precio: 5
},
{
    id:10,
    nombre: 'Silla',
    precio: 150
},
];

app.get('/productos', (req, res) => {
const {id, min, max} = req.query;

if (id){
const producto = productos.find(prod => prod.id === parseInt(id));

if(!producto) return res.send('Producto no encontrado');
res.send({producto});
}

let productoFiltrado = productos;

if (min){
    productoFiltrado = productoFiltrado.filter(prod => prod.precio >= parseInt(min));
}

if (max){
    productoFiltrado = productoFiltrado.filter(prod => prod.precio <= parseInt(max));
}

res.send({productos: productoFiltrado});

});

app.get('*', (req, res) => {
    res.status(404).send('Página no encontrada');
});

app.listen(3000, () => console.log(`servidor en el puerto http://localhost:3000`));