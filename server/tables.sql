
create table users (
    id serial not null primary key,
    full_name varchar(55) not null,
    email varchar(100) not null,
    city varchar(55),
    github varchar(55) not null,
    codewars varchar(255) not null--,
    -- linkedin not null varchar(255),
);
create table job_list(
    id serial not null primary key,
    indeed VARCHAR not null,
    job_discription VARCHAR not null,
    Company varchar not null,
    Summary varchar not null,
    Date_posted varchar not null, 
    _Location varchar not null

);