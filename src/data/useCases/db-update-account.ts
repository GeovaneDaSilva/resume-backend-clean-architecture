import UserService from '../../services/userService'
import { UpdateAccount, UpdateAccountModel } from '../../domain/useCases/update-account'
import { Cryptography } from '../../infra/cryptgraphy/encryper'

export class DbUpdateAccount implements UpdateAccount {
  constructor (private readonly cryptography: Cryptography) {
    this.cryptography = cryptography
  }

  async update (account: UpdateAccountModel): Promise<UpdateAccountModel> {
    console.log('Encrypt', account.password)

    if (account.password != null) {
      account.password_hash = await this.cryptography.encrypt(account.password)
    }
    const userDBUpdate: any = await UserService.update(account._id, account)
    const newuserDBUpdate: any = {
      id: userDBUpdate._id,
      name: userDBUpdate.name,
      email: userDBUpdate.email,
      role: userDBUpdate.role
    }
    return new Promise(resolve => resolve(
      newuserDBUpdate
    ))
  }
}
