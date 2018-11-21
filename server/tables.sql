drop table if exists users;

create table users (
    id serial not null primary key,
    username varchar(50) not null, 
    password varchar(100), 
    full_name varchar(50) not null,
    email varchar(50) not null, 
    avatar varchar(255) not null, 
    city varchar(55), 
    active_since date not null,
    updated_at date not null,
    public_repos int not null default 0
);