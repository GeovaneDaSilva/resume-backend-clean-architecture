import { DbAddAccount } from '../../data/useCases/db-add-account'
import { DeleteUserAccount } from '../../data/useCases/db-delete-account'
import { GetOneUserAccount, GetUserAccount } from '../../data/useCases/db-get-account'
import { DbUpdateAccount } from '../../data/useCases/db-update-account'
import { DeleteAccountController } from '../../presentation/controllers/signup/delete-user'
import { GetAccountByIdController, GetAccountController } from '../../presentation/controllers/signup/get-user-account'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { UpdateSignUpController } from '../../presentation/controllers/signup/update-signup'
import { MailAwsProvider } from '../../utils-adapters/aws-mail-provider'
import { BcryptAdapter, DcryptAdapter } from '../../utils-adapters/bcrypt-adapter'
import { EmailValidatorAdapter } from '../../utils-adapters/email-validator-adapter'

export const makeSignUpController = (): SignUpController => {
  const salt = 10
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const bcryptAdapter = new BcryptAdapter(salt)
  const mailAwsProvider = new MailAwsProvider()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, mailAwsProvider)
  const signUpController = new SignUpController(emailValidatorAdapter, dbAddAccount)
  return signUpController
}

export const makeUpdateSignUpController = (): UpdateSignUpController => {
  const salt = 10
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const bcryptAdapter = new BcryptAdapter(salt)
  const dbUpdateAccount = new DbUpdateAccount(bcryptAdapter)
  const updateSignUpController = new UpdateSignUpController(emailValidatorAdapter, dbUpdateAccount)
  return updateSignUpController
}

export const makeGetAccountController = (): GetAccountController => {
  const getUserAccount = new GetUserAccount()
  const getAccountController = new GetAccountController(getUserAccount)
  return getAccountController
}

export const makeGetOneAccountController = (): GetAccountByIdController => {
  const getOneUserAccount = new GetOneUserAccount()
  const getOneAccountController = new GetAccountByIdController(getOneUserAccount)
  return getOneAccountController
}

export const makeDeleteOneAccountController = (): DeleteAccountController => {
  const deleteUserAccount = new DeleteUserAccount()
  const deleteAccountController = new DeleteAccountController(deleteUserAccount)
  return deleteAccountController
}
