import { BaseDatabase } from "./base_database";

export class AuthDatabase extends BaseDatabase {

  private static TABLE_NAME = "Auth";

  public async createUser(
    id: string,
    email: string,
    password: string,
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          email,
          password,
        })
        .into(AuthDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(AuthDatabase.TABLE_NAME)
      .where({ email });

    return result[0]
  }

}