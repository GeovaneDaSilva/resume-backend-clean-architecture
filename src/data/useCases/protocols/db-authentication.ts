import { Authentication } from '../../../domain/useCases/authentication'
import UserService from '../../../services/userService'
import { AccountModel } from '../../../domain/models/account'
import { DbAddData } from '../db-add-log'
import { AuthenticationToken } from '../../../presentation/interfaces/jwt-token'

export class Dbauth implements Authentication {
  constructor (private readonly authenticationToken: AuthenticationToken, private readonly dbAddData: DbAddData) {
    this.authenticationToken = authenticationToken
    this.dbAddData = dbAddData
  }

  async auth (email: string, password: string): Promise<AccountModel> {
    try {
      const userDB: any = await UserService.getOne(email)
      const User: any = {
        id: userDB._id,
        name: userDB.name,
        email: userDB.email,
        role: userDB.role,
        date: new Date()
      }

      const token = await this.authenticationToken.token(userDB)

      if (!token) {
        await this.dbAddData.add(User)
        throw Error('NO exist TOken in the data')
      }

      const user = await this.dbAddData.add(User)
      const newUser: any = {
        user,
        token
      }
      return newUser
    } catch (error) {
      console.log(error)
      return error.message
    }
  }
}
