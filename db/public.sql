-- Active: 1705978756250@@127.0.0.1@5432@api_personajes
create table tbl_personaje
(
    id serial primary key,
    pname VARCHAR(200),
    p_age INT,
    id_power INT REFERENCES tbl_power(id),
    id_class INT REFERENCES tbl_class(id),
    id_weapon INT REFERENCES tbl_weapon(id),
    id_info INT REFERENCES tbl_personalinfo(id)
);

create Table tbl_power
(
    id serial primary key,
    power_name VARCHAR(500)
)

create Table tbl_class
(
    id serial primary key,
    class_name VARCHAR(500)
)

create Table tbl_weapon
(
    id serial primary key,
    weapon_type VARCHAR(500)
)

create Table tbl_personalinfo
(
    id serial primary key,
    personalinfo VARCHAR(1000)
)

SELECT * FROM tbl_personaje
INNER JOIN tbl_power
ON tbl_personaje.id_power = tbl_power.id
INNER JOIN tbl_class
ON tbl_personaje.id_class = tbl_class.id
INNER JOIN tbl_weapon
ON tbl_personaje.id_weapon = tbl_weapon.id
INNER JOIN tbl_personalinfo
ON tbl_personaje.id_info = tbl_personalinfo.id; 


--Esta parte es para el segundo examen, ya que tengo que autenticar que ingresen los usuarios. 
create Table tbl_user
(
    username varchar (20) primary key,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(100),
    user_passord varchar(30),
    creation_date Timestamp default current_timestamp,
    active_user bool default true
)
