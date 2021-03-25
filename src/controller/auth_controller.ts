import { Request, Response } from 'express';
import { AuthBusiness } from '../business/auth_business';
import { BaseDatabase } from '../data/base_database';

export class AuthController {

  async login(req: Request, res: Response) {
    try {
      const loginData = {
        email: req.body.email,
        password: req.body.password,
      };

      const authBusiness = new AuthBusiness();
      const token = await authBusiness.getUserByEmail(loginData);

      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}