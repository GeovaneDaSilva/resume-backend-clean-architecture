import { IGetEmailProvider } from '../../../domain/useCases/mail-provider'
import EmailService from '../../../services/emailService'
import { notFound, serverError, success } from '../../helpers/http-helper'
import { HttpResponse, Controller } from './email-protocols'

export class GetEmailController implements Controller {
  constructor (private readonly iGetEmailProvider: IGetEmailProvider) {
    this.iGetEmailProvider = iGetEmailProvider
  }

  async handle (): Promise<HttpResponse> {
    try {
      const emailDB: any = await EmailService.get()
      if (!emailDB) {
        return notFound('')
      }

      const Emailaccount = await this.iGetEmailProvider.getMail(emailDB)
      if (!Emailaccount) {
        return notFound('')
      }

      return success(Emailaccount)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
