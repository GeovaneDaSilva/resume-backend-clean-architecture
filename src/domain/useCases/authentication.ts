import { AccountModel } from '../models/account'

export interface Authentication {
  auth: (email: string, password: string) => Promise<AccountModel>
}
