//agregado para el segundo examen
import { db } from "../db/conn.js";
import jwt from 'jsonwebtoken';

const createUser = async (req,res) =>{

    try {
        const { username, 
                first_name,
                last_name,
                email,
                user_password } = req.body;
    
        const sql = `insert into tbl_user
                    (username, first_name, last_name, email, user_password)
                    values
                    ($1, $2, $3, $4, $5)
                    returning * `;
    
        const result = await db.query(sql, [username, 
                                            first_name,
                                            last_name,
                                            email,
                                            user_password])

        res.status(200).json( {mensaje: "User successfully created", obj_creado: result});

    } catch(err){
            res.status(500).json({mensaje: `compilation error,`, err: err.message})
    } 

    

}

const auth = async (req, res) =>{

    try {

        const {username, user_password} = req.body;
    const sql = `select username, first_name, email
                from tbl_user
                where username = $1
                and user_password = $2
                and active_user = true`;

    const result = await db.query(sql, [username, user_password]);
    if(result.length ===0){
        res.status(400).json({mensaje: "Invalid Credentials"});
    }else{

        const payload = result[0];
        const token = jwt.sign (payload, 'secret', {expiresIn: '1h'})

        res.status(200).json({mensaje: "Authentication Successful", info_user: token })
    }
        
    } catch (err) {
        res.status(500).json({mensaje: "Authentication Error", err: err.message})
    }

    
}

export {createUser}
export {auth}