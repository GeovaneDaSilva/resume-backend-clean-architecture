import mongoose from 'mongoose'
import BusinessCardSchema from '../models/business-card'

export default mongoose.model('card', BusinessCardSchema)
