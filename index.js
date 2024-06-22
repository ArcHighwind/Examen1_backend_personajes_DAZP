import express from 'express';
import {weapon} from './routes/apiWeapon.js'
import {personaje} from './routes/apiPersonaje.js'
import {Pclass} from './routes/apiClass.js'
import {power} from './routes/apiPower.js'
import { info } from './routes/apiInfo.js';
import { user } from './routes/apiUser.js';
import cors from 'cors';
import jwt from 'jsonwebtoken';
//import multer from 'multer';


//My middleware~
const app = express();
app.use(express.json());

app.use(cors())

const verifyToken = (req, res, next) =>{

    const symbols = Object.getOwnPropertySymbols(req);
    const kHeadersSymbol = symbols.find(sym => sym.toString() === 'Symbol(kHeaders)');

    if(kHeadersSymbol){
        const headers = req[kHeadersSymbol];
        const auth = headers.authorization;

        if (auth) {
            //separating the "Bearer" to get the token
            const auth_arr = auth.split(" ");
            const token = auth_arr[1];

            try {

                const decodeToken = jwt.verify( token, 'secret' )
                //req.user = decodeToken;
                next();

            } catch (error) {
                res.status(404).json(error.message)
            }
        }else {
            return res.status(403).json({message: "We require a token in order to access this method."})
        }
    }
}

//para cuando empieze a usar imagenes (se usa dentro de la publicacion o pagina, no aqui.)
//const storage = multer.memoryStorage();
//const upload = multer({ storage: storage})

const port = 3000;


//user agregado para el segundo examen
app.use('/api/user', user);


app.use('/api/personaje', verifyToken ,personaje);
app.use('/api/power', verifyToken, power);
app.use('/api/weapon', verifyToken, weapon);
app.use('/api/Pclass', verifyToken, Pclass);
app.use('/api/info', verifyToken, info);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})