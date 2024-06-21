//agregado para el segundo examen
import express from 'express';
const user = express();
import { createUser, auth } from '../controllers/userController.js';

user.post('/', createUser);

user.post('/auth', auth);

export {user}