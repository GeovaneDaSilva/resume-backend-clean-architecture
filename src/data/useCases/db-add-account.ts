
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
      body: '<p> You your the so best</p>'
    })
    return new Promise(resolve => resolve(
      userDB
    ))
  }
}
