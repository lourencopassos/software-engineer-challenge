import { Request, Response } from 'express'
import { UserBusiness } from '../business/user_business'
import { Authenticator } from '../services/authenticator';

export class UserController {


  async getUsers(req: Request, res: Response) {
    try {

      const search = req.query.search
      const page = (Number(req.query.page!) || 1)

      const authenticator = new Authenticator();
      const tokenData = authenticator.getData(
        req.headers.authorization as string
      );

      if (!tokenData) {
        res.status(401).send({ message: 'Check token' })
      }


      const userBusiness = new UserBusiness()

      const users = await userBusiness.getUsers(search as string, page as number)

      if (!users) {
        res.status(200).send([])
      }



      const links = {
        self: {
          href: `http://localhost/users?search=${search}&page=${page}`
        },
        first: {
          href: `http://localhost/users?search=${search}&page=1`
        },
        prev: {
          href: `http://localhost/users?search=${search}&page=${page - 1}`
        },
        next: {
          href: `http://localhost/users?search=${search}&page=${page + 1}`
        },
      }

      res.status(200).send({ links, users })

    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}
