import { DeleteAccount } from '../../../domain/useCases/delete-account'
import UserService from '../../../services/userService'
import { notFound, serverError, success } from '../../helpers/http-helper'
import { HttpResponse, Controller, HttpRequest } from './signup-protocols'

export class DeleteAccountController implements Controller {
  constructor (private readonly deleteAccount: DeleteAccount) {
    this.deleteAccount = deleteAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.params.id
      const userDB: any = await UserService.getById(id)
      if (!userDB) {
        return notFound(id)
      }
      const account = await this.deleteAccount.delete(userDB)

      return success(account)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
