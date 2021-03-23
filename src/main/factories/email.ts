import { DbAddEmail } from '../../data/useCases/db-add-email'
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
