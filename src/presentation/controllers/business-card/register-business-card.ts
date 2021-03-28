/* eslint-disable @typescript-eslint/naming-convention */
import { AddCard } from '../../../domain/useCases/business-card/business-card'
import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers/http-helper'
import { HttpRequest, HttpResponse, Controller, EmailValidator } from './business-card-protocols'

export class RegisterBusinessCardController implements Controller {
  constructor (private readonly emailValidator: EmailValidator,
    private readonly addCard: AddCard) {
    this.emailValidator = emailValidator
    this.addCard = addCard
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body

      const requiredField = ['owner_email', 'name', 'email']
      for (const field of requiredField) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { owner_email, name, descriptionJob, phone, street, city, country, email, state, website, img } = httpRequest.body

      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }

      const date = new Date()
      const emailAccount = await this.addCard.add({
        owner_email, name, descriptionJob, phone, street, city, country, email, state, website, date, img
      })
      return success(emailAccount)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
