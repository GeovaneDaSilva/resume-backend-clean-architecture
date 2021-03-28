import { DbAddCard } from '../../data/useCases/db-business-card/db-add-business-card'
import { DbGetCard, DbGetOneCard } from '../../data/useCases/db-business-card/db-get-account'
import { GetBusinessCardController, GetOneBusinessCardController } from '../../presentation/controllers/business-card/get-business-card'
import { RegisterBusinessCardController } from '../../presentation/controllers/business-card/register-business-card'
import { MailAwsProvider } from '../../utils-adapters/aws-mail-provider'
import { EmailValidatorAdapter } from '../../utils-adapters/email-validator-adapter'
import { QRCodeAdapter } from '../../utils-adapters/qr-code-adapter'

export const makeRegisterBusinessCardController = (): RegisterBusinessCardController => {
  const mailAwsProvider = new MailAwsProvider()
  const qRCodeAdapter = new QRCodeAdapter()
  const dbAddCard = new DbAddCard(mailAwsProvider, qRCodeAdapter)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const registerBusinessCardController = new RegisterBusinessCardController(emailValidatorAdapter, dbAddCard)
  return registerBusinessCardController
}

export const makeGetBusinessCardController = (): GetBusinessCardController => {
  const dbgetCard = new DbGetCard()
  const getBusinessCardController = new GetBusinessCardController(dbgetCard)
  return getBusinessCardController
}

export const makeGetOneBusinessCardController = (): GetOneBusinessCardController => {
  const dbgetCard = new DbGetOneCard()
  const getOneBusinessCardController = new GetOneBusinessCardController(dbgetCard)
  return getOneBusinessCardController
}
