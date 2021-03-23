import UserService from '../../../services/userService'
import { notFound, serverError, success } from '../../helpers/http-helper'
import { HttpRequest } from '../../interfaces'
import { HttpResponse, Controller, GetAccount, GetOneAccount } from './signup-protocols'

export class GetAccountController implements Controller {
  constructor (private readonly getAccount: GetAccount) {
    this.getAccount = getAccount
  }

  async handle (): Promise<HttpResponse> {
    try {
      const userDB: any = await UserService.get()
      if (!userDB) {
        return notFound('')
      }
      const account = await this.getAccount.get(userDB)
      if (!account) {
        return notFound('')
      }

      return success(account)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}

export class GetAccountByIdController implements Controller {
  constructor (private readonly getOneAccount: GetOneAccount) {
    this.getOneAccount = getOneAccount
  }

  async handle (HttpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = HttpRequest.params.id

      const userDB: any = await UserService.getById(id)
      const newID = await userDB._id

      if (!newID) {
        return notFound('')
      }
      console.log(userDB)

      const account = await this.getOneAccount.getOne(userDB)

      return success(account)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
