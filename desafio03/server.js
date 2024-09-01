const  http = require('http');
const os = require ('os');

const PORT = 3000;

const datosAlumno = {
        nombre: "Willy Di Martino",
        comision: "DWN4AV"
};

const datosSistema = {
    plataforma: os.platform(),
    version: os.version(),
    arquitectura: os.arch(),
    tiempoEncendido: os.uptime(),
    memoriaLibre:os.freemem(),
    memoriaTotal: os.totalmem()
};

const server = http.createServer((req, res) =>{
    const url = req.url;
    const method = req.method;

    if(url === "/" && method === "GET"){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("hola mundo")  
    }else if(url === "/alumno" && method === "GET"){
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(datosAlumno))  
    }else if(url === "/info" && method === "GET"){
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(datosSistema))  
    }else if(url === "/static" && method === "GET"){
        const data = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML estático</title>
</head>
<body>
    <h1>HTML estático</h1>
    <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Fugiat ad minus velit aut!</li>
        <li>Perferendis exercitationem ducimus delectus cumque?</li>
        <li>Repudiandae obcaecati architecto ipsa cum?</li>
        <li>Nihil autem eum impedit accusamus.</li>
        <li>Impedit corporis placeat autem nihil.</li>
        <li>Fuga maxime ut molestias placeat.</li>
        <li>Ratione quisquam corrupti nihil quae!</li>
        <li>Inventore nulla eum itaque porro.</li>
        <li>Dolore harum omnis et adipisci.</li>
    </ul>
</body>
</html>`;
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(data)  
    }else{
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("not found")  
    }

    
});

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});