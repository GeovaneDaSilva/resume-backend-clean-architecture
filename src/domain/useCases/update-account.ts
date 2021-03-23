import { AccountModel } from '../models/account'

export interface UpdateAccountModel {
  _id: string
  name: string
  email: string
  password: string
  password_hash: string
  role: string

}

export interface UpdateAccount {
  update: (account: UpdateAccountModel) => Promise<AccountModel>
}
