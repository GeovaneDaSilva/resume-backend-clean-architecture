import express from 'express'
import { config as dotenv } from 'dotenv'
import middlewares from './middlewares'
import routes from './routes'

const app = express()
middlewares(app)
dotenv()
routes(app)
export default app
