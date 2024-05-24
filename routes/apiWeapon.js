import express from 'express';
const weapon = express();
import { getWeapon, postWeapon } from '../controllers/weaponController.js';

weapon.get('', getWeapon);
weapon.post('', postWeapon);

export {weapon}