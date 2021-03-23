import { LogModel } from '../models/log'

export interface GetLogModel {
  id: string
  name: string
  email: string
  role: string
  date: Date
}
export interface GetLog {
  get: (account: GetLogModel) => Promise<LogModel>
}
