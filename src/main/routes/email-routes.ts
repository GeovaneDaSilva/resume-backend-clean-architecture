import { Router } from 'express'
import AuthenticationToken from '../../presentation/middlewares/auth-middlewares'
import { AdaptRoute } from '../adapters/express-route-adapter'
import { makeDeleteEmailController, makeGetEmailController, makeSendEmailController } from '../factories/email'

export default (router: Router): void => {
  router.post('/email', AdaptRoute(makeSendEmailController()))
  router.get('/email', AuthenticationToken.veryfyToken, AuthenticationToken.veryfyRole_Admin, AdaptRoute(makeGetEmailController()))
  router.delete('/email/:id', AdaptRoute(makeDeleteEmailController()))
}
