import mongoose from 'mongoose'

const BusinessCardSchema = new mongoose.Schema({
  owner_email: { type: String },
  name: { type: String },
  descriptionJob: { type: String },
  phone: { type: String },
  street: { type: String },
  city: { type: String },
  country: { type: String },
  email: { type: String },
  state: { type: String },
  website: { type: String },
  img: { type: String },
  date: { type: String }
})
export default BusinessCardSchema

export class BusinessCardModel {
  _id?: string
  owner_email: string
  name: string
  descriptionJob: string
  phone: string
  street: string
  city: string
  country: string
  email: string
  state: string
  website: string
  img: string
  date: Date
}
