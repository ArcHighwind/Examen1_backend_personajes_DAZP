import { db } from "../db/conn.js";

const getPower = async (req, res) => {
    const sql = `select * from tbl_power`
    const result = await db.query(sql);
    res.json(result);
}

const postPower = async (req,res) => {
    const {power_name} = req.body;
    const params = [power_name];
    const sql = `insert into tbl_power
                (power_name)
                values
                ($1) returning *`
    const result = await db.query(sql,params);
//    res.json(result);
    return res.json({message: "Successfully Added", object_created: result})
}

export {getPower, postPower}