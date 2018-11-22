drop table if exists users;

create table users (
    id serial not null primary key,
    username varchar(50) not null, 
    password varchar(100), 
    full_name varchar(50) not null,
    email varchar(50) not null, 
    avatar varchar(255) not null, 
    city varchar(55), 
    active_since varchar(20) not null,
    public_repos int not null default 0
);
create table job_list(
    id serial not null primary key,
    indeed VARCHAR not null,
    job_discription VARCHAR not null,
    Company varchar not null,
    Summary varchar not null,
    Date_posted varchar not null, 
    _Location varchar not null,
    wage varchar not null 
);