import { IMailProvider, IMessage } from '../domain/useCases/mail-provider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export class MailAwsProvider implements IMailProvider {
  private readonly transporter: Mail
  constructor () {
    this.transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASSWORD
      }
    })
  }

  async sendMail (message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body

    })
  }
}
