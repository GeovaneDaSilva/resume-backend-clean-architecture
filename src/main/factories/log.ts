import { AddDataController } from '../../presentation/controllers/log/add-log'
import { DbAddData } from '../../data/useCases/db-add-log'
import { EmailValidatorAdapter } from '../../utils-adapters/email-validator-adapter'
import { GetLogController } from '../../presentation/controllers/log/get-log'
import { GetLogAccount } from '../../data/useCases/db-get-log'

export const makeAddDataController = (): AddDataController => {
  const dbAddData = new DbAddData()
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const addDataController = new AddDataController(dbAddData, emailValidatorAdapter)
  return addDataController
}

export const makeGetLogController = (): GetLogController => {
  const dbAddData = new GetLogAccount()
  const getLogController = new GetLogController(dbAddData)
  return getLogController
}
