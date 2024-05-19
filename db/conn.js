import pg from 'pg-promise';
import dotenv from 'dotenv';
dotenv.config();
const pgp = pg();

const user = process.env.USER;
const pass = process.env.PASS;
const database = process.env.DB;
const host = process.env.HOST;

const cnstr = `postgresql://${user}:${pass}@${host}:5432/${database}`;
const db = pgp(cnstr);

db.connect()
    .then( ()=> {
        console.log("connection SUCCESS");
    } )
    .catch( (err)=>{
        console.log(`connection FAILED ${err}`);
    })

    export {db}
