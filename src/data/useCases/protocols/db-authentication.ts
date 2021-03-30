import { Authentication } from '../../../domain/useCases/authentication'
import UserService from '../../../services/userService'
import jwt from 'jsonwebtoken'
import { AccountModel } from '../../../domain/models/account'
import { AddLog } from '../../../domain/useCases/add-log'
import { IJwt } from '../../../presentation/interfaces/jwt-token'

export class Dbauth implements Authentication {
  constructor (private readonly addLog: AddLog, private readonly iJwt: IJwt) {
    this.addLog = addLog
    this.iJwt = iJwt
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

      const token = await this.iJwt.token(User)

      if (!token) {
        throw Error('NO exist TOken in the data')
      }

      await this.addLog.add(User)
      const newUser: any = {
        User,
        token
      }
      return newUser
    } catch (error) {
      console.log(error)
      return error.message
    }
  }
}
