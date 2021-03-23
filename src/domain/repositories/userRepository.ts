import mongoose from 'mongoose'
import UserSchema from '../models/account'

export default mongoose.model('User', UserSchema)
