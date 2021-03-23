import { AccountModel, DeleteAccount } from '../../domain/useCases/delete-account'
import UserService from '../../services/userService'

export class DeleteUserAccount implements DeleteAccount {
  async delete (userAccount: AccountModel): Promise<AccountModel> {
    const userDeleted: any = await UserService.delete(userAccount._id)
    return new Promise(resolve => resolve(
      userDeleted
    ))
  }
}
