import { DeleteEmail } from '../../../domain/useCases/mail-provider'
import EmailService from '../../../services/emailService'
import { notFound, serverError, success } from '../../helpers/http-helper'
import { HttpResponse, Controller, HttpRequest } from './email-protocols'

export class DeleteEmailController implements Controller {
  constructor (private readonly deleteEmail: DeleteEmail) {
    this.deleteEmail = deleteEmail
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.params.id
      const emailDB: any = await EmailService.getById(id)
      if (!emailDB) {
        return notFound(id)
      }

      const accountDeleted = await this.deleteEmail.delete(emailDB)
      return success(accountDeleted)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
