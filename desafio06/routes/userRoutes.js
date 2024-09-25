import express from 'express';
import { getAllUsers, getUserById, createUser, loginUser, updateUser, deleteUser} from '../controllers/usersController.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { verificarRol } from '../controllers/usersController.js';

dotenv.config();

const router = express.Router();

const secretKey = process.env.SECRET;

// Middleware para autenticación
const auth = (req, res, next) => {

    const getToken = req.headers.authorization;

    if(getToken){
        const token = getToken.split(" ")[1];
        jwt.verify(token, secretKey, (err, paylod) => {
            if(err){
                return res.status(403).json({message: 'Token inválido'});
            }else{
                console.log(paylod);
                req.user = {id: paylod.id, email: paylod.email};
                next();  
            }
        })
    }
} 

router.get('/',verificarRol(["admin","super-admin"]), getAllUsers);

router.get('/:id',verificarRol(["admin","super-admin"]), getUserById);

router.post('/', createUser);

router.post('/login', loginUser);

router.put('/:id',verificarRol(["admin","super-admin"]), updateUser);

router.delete('/:id',verificarRol(["admin","super-admin"]), deleteUser);

export default router;