/* eslint-disable prefer-const */
import UserService from '../../../services/userService'
import { InvalidParamError, MissingParamError } from '../../errors'
import { NoReadyExist } from '../../errors/ready-exist-error'
import { badRequest, serverError, success } from '../../helpers/http-helper'
import { HttpRequest, HttpResponse, Controller, EmailValidator, UpdateAccount } from './signup-protocols'

export class UpdateSignUpController implements Controller {
  constructor (private readonly emailValidator: EmailValidator,
    private readonly updateAccount: UpdateAccount) {
    this.emailValidator = emailValidator
    this.updateAccount = updateAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredField = ['name', 'email', 'role']
      for (const field of requiredField) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const id = httpRequest.params.id

      const UserDb: any = await UserService.getById(id)
      if (!UserDb) {
        return badRequest(new NoReadyExist(id))
      }

      const body = httpRequest.body

      if (body.password !== body.passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isValid = this.emailValidator.isValid(body.email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const account = await this.updateAccount.update(body)
      return success(account)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
