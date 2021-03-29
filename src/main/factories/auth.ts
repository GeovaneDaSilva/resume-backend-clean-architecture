
import { EmailValidatorAdapter } from '../../utils-adapters/email-validator-adapter'
import { LoginController } from '../../presentation/controllers/login/login'
import { Dbauth } from '../../data/useCases/protocols/db-authentication'
import { DcryptAdapter } from '../../utils-adapters/bcrypt-adapter'
import { DbAddLog } from '../../data/useCases/db-add-log'
import { JwtAdapter } from '../../utils-adapters/jwt-adapter'

export const makeLoginController = (): LoginController => {
  const seed = process.env.SEED
  const expiresIn = process.env.EXPIRES_IN
  const jwtAdapter = new JwtAdapter(seed, expiresIn)
  const dbAddData = new DbAddLog()
  const dbauth = new Dbauth(dbAddData, jwtAdapter)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const dcryptAdapter = new DcryptAdapter()
  const loginController = new LoginController(emailValidatorAdapter, dbauth, dcryptAdapter)
  return loginController
}
