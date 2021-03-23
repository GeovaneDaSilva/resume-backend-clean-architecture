import { GetAccountModel, GetAccount, GetOneAccount } from '../../domain/useCases/get-user'

export class GetUserAccount implements GetAccount {
  async get (usersAccount: GetAccountModel): Promise<GetAccountModel> {
    return new Promise(resolve => resolve(
      usersAccount
    ))
  }
}

export class GetOneUserAccount implements GetOneAccount {
  async getOne (userAccount: GetAccountModel): Promise<GetAccountModel> {
    return new Promise(resolve => resolve(
      userAccount
    ))
  }
}
