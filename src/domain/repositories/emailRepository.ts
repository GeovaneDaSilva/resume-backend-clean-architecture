import mongoose from 'mongoose'
import EmailSchema from '../models/email'

export default mongoose.model('email', EmailSchema)
