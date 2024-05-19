import express from 'express';
const Pclass = express();
import { getClass, postClass } from '../controllers/classController';

Pclass.get('', getClass);
Pclass.post('', postClass);

export {Pclass}