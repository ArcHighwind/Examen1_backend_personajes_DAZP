import express from 'express';
const personaje = express();
import { getPersonaje, postPersonaje } from '../controllers/personajeController';

personaje.get('', getPersonaje);
personaje.post('', postPersonaje);

export {personaje}