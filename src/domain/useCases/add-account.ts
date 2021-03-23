import { AccountModel } from '../models/account'

export interface AddAccountModel {
  name: string
  email: string
  password: string
  password_hash: string
  role: string
  created_date: Date

}

export interface AddAccount {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
