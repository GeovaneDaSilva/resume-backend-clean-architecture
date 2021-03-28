import { Router } from 'express'
import AuthenticationToken from '../../presentation/middlewares/auth-middlewares'
import { AdaptRoute } from '../adapters/express-route-adapter'
import { makeGetMapController, makeRegisterMapController } from '../factories/map'

export default (router: Router): void => {
  router.post('/map', AuthenticationToken.veryfyToken, AuthenticationToken.veryfyRole_Admin, AdaptRoute(makeRegisterMapController()))
  router.get('/maps', AuthenticationToken.veryfyToken, AuthenticationToken.veryfyRole_Admin, AdaptRoute(makeGetMapController()))
}
