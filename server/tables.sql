
create table users (
    id serial not null primary key,
    full_name varchar(55) not null,
    email varchar(100) not null,
    city varchar(55),
    github varchar(55) not null,
    codewars varchar(255) not null--,
    -- linkedin not null varchar(255),
);