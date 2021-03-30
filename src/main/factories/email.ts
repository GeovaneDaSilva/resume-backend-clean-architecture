import { DbAddEmail } from '../../data/useCases/db-add-email'
import { DeleteEmailAccount } from '../../data/useCases/db-delete-email'
import { DbGetEmailAccount, DbGetOneEmailAccount } from '../../data/useCases/db-get-email'
import { DeleteEmailController } from '../../presentation/controllers/email/delete-email'
import { GetEmailController, GetOneEmailController } from '../../presentation/controllers/email/get-email'
import { SendEmailController } from '../../presentation/controllers/email/send-email'
import { MailAwsProvider } from '../../utils-adapters/aws-mail-provider'
import { EmailValidatorAdapter } from '../../utils-adapters/email-validator-adapter'

export const makeSendEmailController = (): SendEmailController => {
  const mailAwsProvider = new MailAwsProvider()
  const dbAddEmail = new DbAddEmail(mailAwsProvider)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const sendEmailController = new SendEmailController(emailValidatorAdapter, dbAddEmail)
  return sendEmailController
}

export const makeGetEmailController = (): GetEmailController => {
  const dbGetEmailAccount = new DbGetEmailAccount()
  const getEmailController = new GetEmailController(dbGetEmailAccount)
  return getEmailController
}

export const makeGetOneEmailController = (): GetOneEmailController => {
  const dbGetOneEmailAccount = new DbGetOneEmailAccount()
  const getOneEmailController = new GetOneEmailController(dbGetOneEmailAccount)
  return getOneEmailController
}

export const makeDeleteEmailController = (): DeleteEmailController => {
  const deleteEmailAccount = new DeleteEmailAccount()
  const deleteEmailController = new DeleteEmailController(deleteEmailAccount)
  return deleteEmailController
}
