import { db } from "../db/conn.js";

const getInfo = async (req, res) => {
    const sql = `select * from tbl_personalinfo`
    const result = await db.query(sql);
    res.json(result);
}

const postInfo = async (req,res) => {
    const {personalinfo} = req.body;
    const params = [personalinfo];
    const sql = `insert into tbl_personalinfo
                (personalinfo)
                values
                ($1) returning *`
    const result = await db.query(sql,params);
    res.json(result);
}

export {getInfo, postInfo}