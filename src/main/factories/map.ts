import { DbAddMap } from '../../data/useCases/db-add-map'
import { DbGetMapAccount } from '../../data/useCases/db-get-map'
import { GetMapController } from '../../presentation/controllers/map/get-map-account'
import { RegisterMapController } from '../../presentation/controllers/map/register-map'

export const makeRegisterMapController = (): RegisterMapController => {
  const dbAddMap = new DbAddMap()
  const registerMapController = new RegisterMapController(dbAddMap)
  return registerMapController
}

export const makeGetMapController = (): GetMapController => {
  const dbGetMapAccount = new DbGetMapAccount()
  const getMapController = new GetMapController(dbGetMapAccount)
  return getMapController
}
