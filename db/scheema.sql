CREATE TABLE linkedin
(
    id INTEGER NOT NULL
    AUTO_INCREMENT,
    name VARCHAR
    (70) NOT NULL,
    url VARCHAR
    (200) NOT NULL,
    entered BOOLEAN DEFAULT false,
    createdAT timestamp not null default current_timestamp,
    PRIMARY KEY
    (id)
);