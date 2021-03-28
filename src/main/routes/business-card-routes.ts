import { Router } from 'express'
import AuthenticationToken from '../../presentation/middlewares/auth-middlewares'
import { AdaptRoute } from '../adapters/express-route-adapter'
import { makeGetBusinessCardController, makeGetOneBusinessCardController, makeRegisterBusinessCardController } from '../factories/business-card'

export default (router: Router): void => {
  router.post('/business-card', AdaptRoute(makeRegisterBusinessCardController()))
  router.get('/business-card', AdaptRoute(makeGetBusinessCardController()))
  router.get('/business-card/:id', AdaptRoute(makeGetOneBusinessCardController()))
}
