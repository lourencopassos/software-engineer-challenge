CREATE TABLE Users (
id VARCHAR(36),
name VARCHAR(50),
username VARCHAR(50)
);

LOAD DATA LOCAL INFILE  '/var/lib/mysql-files/users.csv' into table Users
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r';


CREATE TABLE Priority_One (
id VARCHAR(36)
);

LOAD DATA LOCAL INFILE  '/var/lib/mysql-files/lista_relevancia_1.txt' into table Priority_One
FIELDS TERMINATED BY '\n' OPTIONALLY ENCLOSED BY '"';

CREATE TABLE Priority_Two (
id VARCHAR(36)
);

LOAD DATA LOCAL INFILE  '/var/lib/mysql-files/lista_relevancia_2.txt' into table Priority_Two
FIELDS TERMINATED BY '\n' OPTIONALLY ENCLOSED BY '"';