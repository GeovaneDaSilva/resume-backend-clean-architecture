import mongoose from 'mongoose'

export default (): void => {
  mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }, (err) => {
    if (err) {
      console.log(err.message)
    } else {
      console.log('Base de datos  puerto 27017: \x1b[32m%s\x1b[0m', 'online')
    }
  })
}
