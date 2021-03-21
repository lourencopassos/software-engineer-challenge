CREATE TABLE Users (
id VARCHAR(36),
name VARCHAR(50),
username VARCHAR(50)
);

LOAD DATA LOCAL INFILE  '/var/lib/mysql-files/users.csv' into table Users
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r';