import { AddEmailAccount } from '../../../domain/useCases/add-email'
import EmailService from '../../../services/emailService'
import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers/http-helper'
import { HttpRequest, HttpResponse, Controller, EmailValidator } from './email-protocols'

export class SendEmailController implements Controller {
  constructor (private readonly emailValidator: EmailValidator,
    private readonly addEmailAccount: AddEmailAccount) {
    this.emailValidator = emailValidator
    this.addEmailAccount = addEmailAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body

      if (!body.email.from.email) {
        return badRequest(new MissingParamError(' From Email'))
      }

      if (!body.email.to.email) {
        return badRequest(new MissingParamError(' To Email'))
      }
      const isValid = this.emailValidator.isValid(body.email.to.email)
      if (!isValid) {
        return badRequest(new InvalidParamError('From email'))
      }
      const emailAccount = await this.addEmailAccount.addMail(body)
      return success(emailAccount)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
