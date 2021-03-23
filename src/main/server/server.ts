import app from '../config/app'
import ConnectDB from '../../infra/db/mongodb/mongo-connect'

app.listen(process.env.PORT, () => {
  console.log(`'Express server port: \x1b[32m${process.env.PORT}\x1b[0m`)
  ConnectDB()
})
