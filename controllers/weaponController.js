import { db } from "../db/conn.js";

const getWeapon = async (req, res) => {
    const sql = `select * from tbl_weapon`
    const result = await db.query(sql);
    res.json(result);
}

const postWeapon = async (req,res) => {
    const {weapon_type} = req.body;
    const params = [weapon_type];
    const sql = `insert into tbl_weapon
                (weapon_type)
                values
                ($1) returning *`
    const result = await db.query(sql,params);
//    res.json(result);

    return res.json({message: "Successfully Added", object_created: result})
}

export {getWeapon, postWeapon}