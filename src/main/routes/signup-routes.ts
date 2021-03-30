import { Router } from 'express'
import { makeDeleteOneAccountController, makeGetAccountController, makeGetOneAccountController, makeSignUpController, makeUpdateSignUpController } from '../factories/signup'
import { AdaptRoute } from '../adapters/express-route-adapter'
import { makeLoginController } from '../factories/auth'
import AuthenticationToken from '../../presentation/middlewares/auth-middlewares'
export default (router: Router): void => {
  router.post('/login', AdaptRoute(makeLoginController()))
  router.post('/signup', AuthenticationToken.veryfyToken, AuthenticationToken.veryfyRole_Admin, AdaptRoute(makeSignUpController()))
  router.get('/users', AuthenticationToken.veryfyToken, AuthenticationToken.veryfyRole_Admin,AdaptRoute(makeGetAccountController()))
  router.get('/user/:id', AuthenticationToken.veryfyToken, AdaptRoute(makeGetOneAccountController()))
  router.put('/signup/:id', AuthenticationToken.veryfyToken,AdaptRoute(makeUpdateSignUpController()))
  router.delete('/user/:id', AuthenticationToken.veryfyToken, AuthenticationToken.veryfyRole_Admin, AdaptRoute(makeDeleteOneAccountController()))
}
