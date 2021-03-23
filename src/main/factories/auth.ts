
import { EmailValidatorAdapter } from '../../utils-adapters/email-validator-adapter'
import { LoginController } from '../../presentation/controllers/login/login'
import { Dbauth } from '../../data/useCases/protocols/db-authentication'
import { DcryptAdapter } from '../../utils-adapters/bcrypt-adapter'

export const makeLoginController = (): LoginController => {
  const dbauth = new Dbauth()
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const dcryptAdapter = new DcryptAdapter()
  const loginController = new LoginController(emailValidatorAdapter, dbauth, dcryptAdapter)
  return loginController
}
