import pg from 'pg-promise';
import dotenv from 'dotenv';
dotenv.config();
const pgp = pg();

const cnstr = `postgresql://postgres:P@quito951@localhost:5432/postgres`;
const db = pgp(cnstr);

db.connect()
    .then( ()=> {
        console.log("connection SUCCESS");
    } )
    .catch( (err)=>{
        console.log(`connection FAILED ${err}`);
    })

    export {db}
