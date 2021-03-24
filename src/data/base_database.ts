import knex, { Knex } from "knex";


export abstract class BaseDatabase {

  private static connection: Knex | null = null;

  protected getConnection(): Knex {
    if (!BaseDatabase.connection) {
      BaseDatabase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.MYSQL_HOST_DOCKER || 'db',
          port: +process.env.MYSQL_PORT! || 3306,
          user: process.env.MYSQL_USER || 'root',
          password: process.env.MYSQL_PASSWORD || 'root',
          database: process.env.MYSQL_DATABASE || 'pic_pay_users',
        },
      });
    }

    return BaseDatabase.connection;
  }

  public static async destroyConnection(): Promise<void> {
    if (BaseDatabase.connection) {
      await BaseDatabase.connection.destroy();
      BaseDatabase.connection = null;
    }
  }
}