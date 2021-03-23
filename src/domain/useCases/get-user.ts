import { AccountModel } from '../models/account'

export interface GetAccountModel {
  id: string
  name: string
  email: string
  password: string
  role: string
}

export interface GetAccount {
  get: (account: GetAccountModel) => Promise<AccountModel>
}

export interface GetOneAccount {
  getOne: (account: GetAccountModel) => Promise<AccountModel>
}
