import { Express } from 'express'
import { cors, bodyParser } from '../middlewares/index'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
}
