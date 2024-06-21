//agregado para el segundo examen
import { db } from "../db/conn.js";

const createUser = async (req,res) =>{


    try {
        const { username, 
                first_name,
                last_name,
                email,
                user_passord } = req.body;
    
        const sql = `insert into tbl_user
                    (username, first_name, last_name, email, user_passord)
                    values
                    ($1, $2, $3, $4, $5)
                    returning * `;
    
        const result = await db.query(sql, [username, 
                                            first_name,
                                            last_name,
                                            email,
                                            user_passord])

        res.status(200).json( {mensaje: "User successfully created", obj_creado: result});

    } catch(err){
            res.status(500).json({mensaje: `compilation error,`, err: err.message})
    } 

    

}

const auth = async (req, res) =>{

    try {

        const {username, user_passord} = req.body;
    const sql = `select username, first_name, email
                from tbl_user
                where username = $1
                and user_password = $2
                and active = true`;

    const result = await db.query(sql, [username, user_passord]);
    if(result.length ===0){
        res.status(404).json({mensaje: "Invalid Credentials"});
    }else{
        res.status(200).json({mensaje: "Authentication Successful", info_user:result })
    }
        
    } catch (err) {
        res.status(500).json({mensaje: "Authentication Error", err: err.message})
    }

    
}

export {createUser}
export {auth}