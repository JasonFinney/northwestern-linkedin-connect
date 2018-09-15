### Schema

CREATE DATABASE cat_db;
USE cat_db;

drop table cats;

CREATE TABLE cats
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	createdAT timestamp not null default current_timestamp
	PRIMARY KEY (id)
);
