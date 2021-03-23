import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  password_hash: { type: String },
  role: { type: String },
  created_date: { type: String }

})

UserSchema.plugin(uniqueValidator, { message: 'Error, expected {VALUE} to be unique.' })
export default UserSchema

export class AccountModel {
  name: string
  email: string
  password: string
  role: string
}
