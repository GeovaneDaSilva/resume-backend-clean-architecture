
// eslint-disable-next-line @typescript-eslint/quotes

import UserService from '../../services/userService'
import { AddAccount, AddAccountModel } from '../../domain/useCases/add-account'
import { Cryptography } from '../../infra/cryptgraphy/encryper'
import { MailAwsProvider } from '../../utils-adapters/aws-mail-provider'

export class DbAddAccount implements AddAccount {
  constructor (private readonly cryptgraphy: Cryptography, private readonly mailAwsProvider: MailAwsProvider) {
    this.cryptgraphy = cryptgraphy
    this.mailAwsProvider = mailAwsProvider
  }

  async add (account: AddAccountModel): Promise<AddAccountModel> {
    account.password_hash = await this.cryptgraphy.encrypt(account.password_hash)
    const userDB: any = await UserService.create(account)

    await this.mailAwsProvider.sendMail({
      to: {
        name: userDB.name,
        email: userDB.email
      },
      from: {
        name: 'Geovane',
        email: 'process.environments@gmail.com'
      },
      subject: 'Welcome to the coder',
      // eslint-disable-next-line @typescript-eslint/quotes
      body: `<h4> Thank you for creating your account !! </h4> <br>
      Access credentials: <br>
      User: ${account.email}
      <br>
      Password: ${account.password}

        `
    })
    return new Promise(resolve => resolve(
      userDB
    ))
  }
}
