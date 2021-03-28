
import { EmailValidatorAdapter } from '../../utils-adapters/email-validator-adapter'
import { LoginController } from '../../presentation/controllers/login/login'
import { Dbauth } from '../../data/useCases/protocols/db-authentication'
import { DcryptAdapter } from '../../utils-adapters/bcrypt-adapter'
import { JwtAdapter } from '../../utils-adapters/jwt-adapter'
import { DbAddData } from '../../data/useCases/db-add-log'

export const makeLoginController = (): LoginController => {
  const jwtAdapter = new JwtAdapter(process.env.SEED, process.env.EXPIRES_IN)
  const dbAddData = new DbAddData()
  const dbauth = new Dbauth(jwtAdapter, dbAddData)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const dcryptAdapter = new DcryptAdapter()
  const loginController = new LoginController(emailValidatorAdapter, dbauth, dcryptAdapter)
  return loginController
}
