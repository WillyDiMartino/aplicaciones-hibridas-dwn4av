
import { readUsersFile, writeUsersFile } from "../models/usersModel.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secretKey = process.env.SECRET;

const getAllUsers =  (req, res) => {
    let users = readUsersFile();
    res.status(200).json(users);
};

const getUserById = (req, res) => {
    const userId= parseInt(req.params.id);
let users = readUsersFile();
const user = users.findIndex(u => u.id === userId);
if(user){
    res.status(200).json(user);
}else{
    res.status(404).json({message: 'User not found'});
}
};

// Función asincrónica para crear un usuario y que espere a que el hash de la contraseña se complete
const createUser = async (req, res) => {

const {name, lastname, username, password, email, rol} = req.body;

const hashPassword = await bcrypt.hash(password, 10) // Se crea un hash de la contraseña con 10 vueltas "saltRounds" 

    let users = readUsersFile();
    const newUser = {
    id: users.length > 0 ? users.length + 1 : 1,
    //si es un objeto se puede pasar solo el nombre de la variable
    name, //name: name
    email,
    lastname,
    username,
    rol,
    password: hashPassword // Se guarda el hash de la contraseña. En producción no se debe guardar la contraseña
}
users.push(newUser);
writeUsersFile(users);
res.status(201).json(newUser);

};

const loginUser = async (req, res) => {
 const {email, password} = req.body;
 let users = readUsersFile();
 const user = users.find(u => u.email === email);

 if(!user){
       return res.status(404).json({message: 'User not found'});
 }

 const validPassword = await bcrypt.compare(password, user.password); // Se compara la contraseña ingresada con el hash guardado en la base de datos
 //Primero se pasa el password ingresado y luego el hash guardado en la base de datos. Devuelve un booleano

 if (!validPassword){
     return res.status(401).json({message: 'Invalid password'});
 }

 const token = jwt.sign({id: user.id, email: user.email}, secretKey, {expiresIn: '1h'}); // Se crea un token con el id y el email del usuario. El token expira en 1 hora  

 res.status(200).json({token});

};

const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsersFile();
    const userIndex = users.findIndex(u => u.id === userId);
    
    if(userIndex != -1){
        users[userIndex] = {id: userId, ...req.body};
        writeUsersFile(users);
        res.status(200).json (users[userIndex]);
    }else{
        res.status(404).json({message: 'User not found'});
    }

};  

const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsersFile();
    const userIndex = users.findIndex(u => u.id === userId);

    if(userIndex !== -1){
       users.splice(userIndex, 1)
        res.status(204).send() //204 No Content
    }else{
        res.status(404).json({message: "usuario no encontrado"})
    }
};

function verificarRol(rolesPermitidos){
    return function(req, res, next){
        const rolUsuario = req.headers['x-rol'];

        if(rolesPermitidos.includes(rolUsuario)){
            next();
        }else{
            res.status(403).json({mensaje: "Acceso denegado"})
        }
    }
}

export {getAllUsers, getUserById, createUser, loginUser, updateUser, deleteUser, verificarRol};