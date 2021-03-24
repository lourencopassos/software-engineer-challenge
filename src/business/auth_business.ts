import { AuthDatabase } from "../data/auth_data";
import { HashManager } from "../services/hash_manager";
import { Authenticator } from "../services/authenticator";

export class AuthBusiness {

  async getUserByEmail(user: { email: string, password: string }) {
    const userDatabase = new AuthDatabase();
    const userFromDB = await userDatabase.getUserByEmail(user.email);

    const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(
      user.password,
      userFromDB.password
    );

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken();

    if (!hashCompare) {
      throw new Error("Invalid Password!");
    }

    return accessToken;
  }
}