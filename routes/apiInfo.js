import express from 'express';
const info = express();
import { getInfo, postInfo } from '../controllers/infoController';

info.get('', getInfo);
info.post('', postInfo);

export {info}