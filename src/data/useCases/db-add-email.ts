
import { AddEmailAccount, IMessage } from '../../domain/useCases/add-email'
import { MailAwsProvider } from '../../utils-adapters/aws-mail-provider'
import emailService from '../../services/emailService'

export class DbAddEmail implements AddEmailAccount {
  constructor (private readonly mailAwsProvider: MailAwsProvider) {
    this.mailAwsProvider = mailAwsProvider
  }

  async addMail (message: IMessage): Promise<IMessage> {
    const newMessage: any = {
      from: {
        name: message.email.from.name,
        email: message.email.from.email
      },
      to: {
        name: message.email.to.name,
        email: message.email.to.email
      },
      subject: message.email.subject,
      message: message.email.message,
      date: new Date()

    }

    const email: any = {
      email: newMessage
    }

    const emailAccount: any = await emailService.create(email)

    if (emailAccount) {
      const { email } = await emailAccount

      await this.mailAwsProvider.sendMail({
        to: {
          name: email.to.name,
          email: email.to.email
        },
        from: {
          name: email.from.name,
          email: process.env.EMAILVERIFIED
        },
        subject: email.subject,
        body: ` ${email.message} `
      })
    }
    return new Promise(resolve => resolve (
      emailAccount
    ))
  }
}
