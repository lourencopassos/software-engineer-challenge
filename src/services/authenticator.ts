import * as jwt from "jsonwebtoken";

export class Authenticator {
  public generateToken(
    expiresIn: string = process.env.ACCESS_TOKEN_EXPIRES_IN!
  ): string {
    const token = jwt.sign(
      {
      },
      process.env.JWT_KEY as string,
      {
        expiresIn,
      }
    );
    return token;
  }

  public getData(token: string): boolean {
    return jwt.verify(token, process.env.JWT_KEY as string) as any;
  }
}
