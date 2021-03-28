import mongoose from 'mongoose'

const LogSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  email: { type: String },
  role: { type: String },
  date: { type: String }
})

export default LogSchema

export class LogModel {
  id: string
  name: string
  email: string
  role: string
  date: Date
}
