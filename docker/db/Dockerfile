FROM mysql:5.6
ENV MYSQL_DATABASE pic_pay_users
ADD ./scripts.sql /docker-entrypoint-initdb.d/
COPY ./users.csv /var/lib/mysql-files/
COPY ./lista_relevancia_1.txt /var/lib/mysql-files/
COPY ./lista_relevancia_2.txt /var/lib/mysql-files/
RUN chmod -R 775 /docker-entrypoint-initdb.d
