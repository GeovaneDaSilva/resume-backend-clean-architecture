
export class AccountModel {
  _id: string
  name: string
  email: string
  password: string
}
export interface DeleteAccount {
  delete: (account: AccountModel) => Promise<AccountModel>
}
