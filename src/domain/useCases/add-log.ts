import { LogModel } from '../../domain/models/log'

export interface AddLogModel {
  id: string
  name: string
  email: string
  role: string
  date: Date
}

export interface AddLog {
  add: (data: AddLogModel) => Promise<LogModel>
}
