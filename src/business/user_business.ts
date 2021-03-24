import { UserDatabase } from "../data/user_database";
import { User } from "../model/user";
import { removeDuplicates } from "../utils/remove_duplicates";

export class UserBusiness {
  async getUsers(search: string, page: number) {

    let initialArray: User[] = []
    let presentInPriorityTableOne = []
    let presentInPriorityTableTwo = []
    let priorityUsersIds: any = []
    let priorityUsers: User[] = []


    const userDatabase = new UserDatabase();
    const users = await userDatabase.getUsers(search, page)

    if (users.length > 1) {
      for (let user of users) {
        const id = user.getId()

        const userInPriorityOneTable = await userDatabase.checkPriorityOne(id)

        if (userInPriorityOneTable !== undefined) {
          presentInPriorityTableOne.push(userInPriorityOneTable)
        }

        const userInPriorityTwoTable = await userDatabase.checkPriorityTwo(id)

        if (userInPriorityTwoTable !== undefined) {
          presentInPriorityTableTwo.push(userInPriorityTwoTable)
        }
      }

      priorityUsersIds = priorityUsersIds.concat(presentInPriorityTableOne).concat(presentInPriorityTableTwo)
    }

    if (priorityUsersIds.length > 0) {
      for (let user of priorityUsersIds) {

        const completeUser = await userDatabase.getUserById(user.id)
        priorityUsers.push(completeUser)

      }

    }

    const orderedArray = initialArray.concat(priorityUsers).concat(users)

    const arrayWithoutDuplicates = removeDuplicates(orderedArray)

    return arrayWithoutDuplicates
  }
}