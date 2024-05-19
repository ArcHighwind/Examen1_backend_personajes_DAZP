import { db } from "../db/conn.js";

const getPersonaje = async (req, res) => {
    const sql = `select * from tbl_personaje
    INNER JOIN tbl_power
    ON tbl_personaje.id_power = tbl_power.id
    INNER JOIN tbl_class
    ON tbl_personaje.id_class = tbl_class.id
    INNER JOIN tbl_weapon
    ON tbl-personaje.id_weapon = tbl_weapon.id
    INNER JOIN tbl_personalinfo
    ON tbl_personaje.id_info = tbl_personalinfo.id; `
    const result = await db.query(sql);
    res.json(result);
}

const postPersonaje = async (req, res) => {
    const { pname, p_age, id_power, id_class, id_weapon, id_info } = req.body;
    const params = [pname, p_age, id_power, id_class, id_weapon, id_info];
    const sql = `insert into tbl_power
                (pname, p_age, id_power, id_class, id_weapon, id_info)
                values
                ($1, $2, $3, $4, $5, $6) returning *`
    const result = await db.query(sql, params);
    res.json(result);
}

export { getPersonaje, postPersonaje }