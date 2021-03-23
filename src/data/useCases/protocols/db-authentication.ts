import { Authentication } from '../../../domain/useCases/authentication'
import UserService from '../../../services/userService'
import jwt from 'jsonwebtoken'
import { AccountModel } from '../../../domain/models/account'
import { DbAddData } from '../db-add-log'

export class Dbauth extends DbAddData implements Authentication {
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
      const token = await jwt.sign({
        user: User
      }, process.env.SEED, { expiresIn: process.env.EXPIRES_IN })

      if (!token) {
        await this.add(User)
        throw Error('NO exist TOken in the data')
      }

      await this.add(User)

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
