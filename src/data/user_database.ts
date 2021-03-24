import { User } from '../model/user';
import { BaseDatabase } from './base_database'

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = 'Users';
  private static TABLE_PRIORITY_ONE = 'Priority_One';
  private static TABLE_PRIORITY_TWO = 'Priority_Two';

  public async getUsers(search: any, page: number): Promise<User[] | []> {

    const pagination = (page || 1) * 15;

    try {
      let result: User[] = [];
      const users = await this.getConnection()
        .select('*')
        .from(UserDatabase.TABLE_NAME)
        .where('name', 'like', `%${search}%`)
        .orWhere('username', 'like', `%${search}%`)
        .limit(15)
        .offset(pagination)


      for (let user of users) {
        result.push(User.toUserModel(user));
      }

      return result;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async checkPriorityOne(id: string): Promise<any> {
    try {
      const user: any = await this.getConnection()
        .select('*')
        .from(`pic_pay_users.${UserDatabase.TABLE_PRIORITY_ONE}`)
        .where({ id })

      return user[0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async checkPriorityTwo(id: string): Promise<any> {
    try {
      const user = await this.getConnection()
        .select('*')
        .from(UserDatabase.TABLE_PRIORITY_TWO)
        .where({ id });

      return user[0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserById(id: string): Promise<User> {
    try {
      const user = await this.getConnection()
        .select('*')
        .from(UserDatabase.TABLE_NAME)
        .where({ id });

      return user[0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}