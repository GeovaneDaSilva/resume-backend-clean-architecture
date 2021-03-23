import { Router } from 'express'
import { makeAddDataController, makeGetLogController } from '../factories/log'
import { AdaptRoute } from '../adapters/express-route-adapter'
import AuthenticationToken from '../../presentation/middlewares/auth-middlewares'

export default (router: Router): void => {
  router.post('/log/:_id', AuthenticationToken.veryfyToken, AuthenticationToken.veryfyRole_Admin , AdaptRoute(makeAddDataController()))
  router.get('/logs/', AuthenticationToken.veryfyToken, AuthenticationToken.veryfyRole_Admin , AdaptRoute(makeGetLogController()))
}
