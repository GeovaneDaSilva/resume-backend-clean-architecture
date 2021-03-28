import { EmailModel } from '../models/email'

export interface GetEmailModel {
  name: string
  email: string
  subject: string
  message: string
}

export interface GetEmail {
  get: (account: GetEmailModel) => Promise<EmailModel>
}
