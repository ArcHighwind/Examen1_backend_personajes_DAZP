import express from 'express';
import {weapon} from './routes/apiWeapon.js'
import {personaje} from './routes/apiPersonaje.js'
import {Pclass} from './routes/apiClass.js'
import {power} from './routes/apiPower.js'
import { info } from './routes/apiInfo.js';
import { user } from './routes/apiUser.js';
import cors from 'cors';


const app = express();
app.use(express.json());

app.use(cors())

const port = 3000;

//user agregado para el segundo examen
app.use('/api/user', user);


app.use('/api/personaje', personaje);
app.use('/api/power', power);
app.use('/api/weapon', weapon);
app.use('/api/Pclass', Pclass);
app.use('/api/info', info);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})