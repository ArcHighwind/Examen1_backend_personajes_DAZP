import express from 'express';
const info = express();
import { getInfo, postInfo } from '../controllers/infoController.js';

info.get('', getInfo);
info.post('', postInfo);

export {info}