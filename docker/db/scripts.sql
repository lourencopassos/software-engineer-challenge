CREATE TABLE Users (
id VARCHAR(36),
name VARCHAR(50),
username VARCHAR(50)
);

LOAD DATA LOCAL INFILE  '/var/lib/mysql-files/users.csv' into table Users
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\r\n';


CREATE TABLE Priority_One (
id VARCHAR(36)
);

LOAD DATA LOCAL INFILE  '/var/lib/mysql-files/lista_relevancia_1.txt' into table Priority_One
FIELDS TERMINATED BY '\r\n' OPTIONALLY ENCLOSED BY '"';

CREATE TABLE Priority_Two (
id VARCHAR(36)
);

LOAD DATA LOCAL INFILE  '/var/lib/mysql-files/lista_relevancia_2.txt' into table Priority_Two
FIELDS TERMINATED BY '\r\n' OPTIONALLY ENCLOSED BY '"';


CREATE TABLE Auth (
id VARCHAR(36),
email varchar(36),
password varchar(100)
);

INSERT INTO Auth (id, email,password) VALUES ('123456', 'challenge@picpay.com.br', '$2y$10$apzE9irks1Yp.M8Ou84eXOrZzV7LNzVNfokIeLdpnJP3UqbAdbTwm')
