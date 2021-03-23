import mongoose from 'mongoose'

const EmailSchema = new mongoose.Schema({
  email: {
    to: {
      name: {
        type: String
      },
      email: {
        type: String
      }
    },
    from: {
      name: {
        type: String
      },
      email: {
        type: String
      }
    },
    subject: { type: String },
    message: { type: String }
  }
})
export default EmailSchema

export class EmailModel {
  name: string
  email: string
  subject: string
  message: string
}
