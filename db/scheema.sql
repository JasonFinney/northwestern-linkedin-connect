CREATE TABLE linkedin
(
    id INTEGER NOT NULL
    AUTO_INCREMENT,
    name VARCHAR
    (70) NOT NULL,
    url VARCHAR
    (200) NOT NULL,
    entered BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
);