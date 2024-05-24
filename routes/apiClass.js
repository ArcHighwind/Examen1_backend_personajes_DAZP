import express from 'express';
const Pclass = express();
import { getClass, postClass } from '../controllers/classController.js';

Pclass.get('', getClass);
Pclass.post('', postClass);

export {Pclass}