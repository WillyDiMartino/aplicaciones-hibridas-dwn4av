
/*
Parte 1:  
Callbacks 
• Crear tres funciones (task 1, task 2, task 3) que simulen 
tareas asincrónicas utilizando setTimeout. 
• Implementar una función principal (mainCallback) que llame  
a estas funciones en secuencia y muestre los resultados  
en la consola. 
*/

function mainCallback(callbacks){
    setTimeout(() =>{
        const data="task 1";
        callbacks(data);
    }, 1000)
}

function task01(data){
    console.log(data)
}
function task02(data){
    console.log(data.innerText="task 2");
}
function task03(data){
    console.log(data.innerText="task 3");
}

mainCallback(task01);
mainCallback(task02);
mainCallback(task03);

/*
Parte 2:  
Promesas 
Convertir las funciones anteriores para que devuelvan 
promesas. 
Usar Promise.all para ejecutar todas las funciones  
en paralelo y mostrar los resultados en la consola.
*/

const promesa1 = new Promise((resolve) => setTimeout(resolve, 1000, "task 1"));
const promesa2 = new Promise((resolve) => setTimeout(resolve, 2000, "task 2"));
const promesa3 = new Promise((resolve) => setTimeout(resolve, 3000, "task 3"));

Promise.all([promesa1, promesa2, promesa3]).then(resultado =>{
    console.log(resultado);
}).catch(error => {
    console.log(error);
});


/*
Parte 3:  
Async/Await 
• Crear una función asincrónica (mainAsync) que use await para 
llamar a las funciones que devuelven promesas en secuencia  
y mostrar los resultados en la consola. 
• Modificar las funciones y la lógica principal  
para manejar errores.
*/

const exito = true;

function task1() {return new Promise((resolve, reject) => {exito ? resolve("Funcion task 1") : reject("Error al obtener task 1");})}
function task2() {return new Promise((resolve, reject) => {exito ? resolve("Funcion task 2") : reject("Error al obtener task 2");})}
function task3() {return new Promise((resolve, reject) => {exito ? resolve("Funcion task 3") : reject("Error al obtener task 3" );})}

async function mainAsync() {
    try {
        const dato1 = await task1();
        console.log(dato1)
        const dato2 = await task2();
        console.log(dato2)
        const dato3 = await task3();
        console.log(dato3)
    } catch (error) {
        console.log(error)
    }
}

mainAsync()

