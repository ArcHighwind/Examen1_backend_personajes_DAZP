import express from 'express';
const power = express();
import { getPower, postPower } from '../controllers/powerController';

power.get('', getPower);
power.post('', postPower);

export {power}