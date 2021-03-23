import UserService from '../../../services/userService'
import { InvalidParamError, MissingParamError } from '../../errors'
import { ReadyExist } from '../../errors/ready-exist-error'
import { badRequest, serverError, success } from '../../helpers/http-helper'
import { HttpRequest, HttpResponse, Controller, EmailValidator, AddAccount } from './signup-protocols'

export class SignUpController implements Controller {
  constructor (private readonly emailValidator: EmailValidator,
    private readonly addAccount: AddAccount) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredField = ['name', 'email', 'password', 'passwordConfirmation', 'role']
      for (const field of requiredField) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, email, password, passwordConfirmation, role, date } = httpRequest.body
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const userReadyExist = await UserService.getOne(email)
      if (userReadyExist) {
        return badRequest(new ReadyExist(email))
      }

      const account = await this.addAccount.add({
        name, email, password, password_hash: password, role, created_date: new Date()
      })
      return success(account)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
