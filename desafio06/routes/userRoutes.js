import express from 'express';
import { getAllUsers, getUserById, createUser, loginUser, updateUser, deleteUser} from '../controllers/usersController.js';
import dotenv from 'dotenv';
import {auth, verificarRol} from '../middlewares/middlewares.js';

dotenv.config();

const router = express.Router();

const secretKey = process.env.SECRET;

 

router.get('/', auth, verificarRol(["admin","super-admin"]), getAllUsers);

router.get('/:id', auth, verificarRol(["admin","super-admin"]), getUserById);

router.post('/', createUser);

router.post('/login', loginUser);

router.put('/:id',auth, verificarRol(["admin","super-admin"]), updateUser);

router.delete('/:id',auth, verificarRol(["admin","super-admin"]), deleteUser);

export default router;