import { Router } from 'express'
import { AdaptRoute } from '../adapters/express-route-adapter'
import { makeSendEmailController } from '../factories/email'

export default (router: Router): void => {
  router.post('/email', AdaptRoute(makeSendEmailController()))
}
