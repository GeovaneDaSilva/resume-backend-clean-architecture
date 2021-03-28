import { Router } from 'express'
import { AdaptRoute } from '../adapters/express-route-adapter'
import { makeDeleteEmailController, makeGetEmailController, makeSendEmailController } from '../factories/email'

export default (router: Router): void => {
  router.post('/email', AdaptRoute(makeSendEmailController()))
  router.get('/email', AdaptRoute(makeGetEmailController()))
  router.delete('/email/:id', AdaptRoute(makeDeleteEmailController()))
}
