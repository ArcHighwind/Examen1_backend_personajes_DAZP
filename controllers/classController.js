import { db } from "../db/conn.js";

const getClass = async (req, res) => {
    const sql = `select * from tbl_class`
    const result = await db.query(sql);
    res.json(result);
}

const postClass = async (req,res) => {
    const {class_name} = req.body;
    const params = [class_name];
    const sql = `insert into tbl_class
                (class_name)
                values
                ($1) returning *`
    const result = await db.query(sql,params);
//    res.json(result);

    return res.json({message: "Successfully Added", object_created: result})
}

export {getClass, postClass}