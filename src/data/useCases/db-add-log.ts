import { AddLog, AddLogModel } from '../../domain/useCases/add-log'
import LogService from '../../services/logService'

export class DbAddData implements AddLog {
  async add (data: AddLogModel): Promise<AddLogModel> {
    const userDB: any = await LogService.create(data)
    return new Promise(resolve => resolve(
      userDB
    ))
  }
}
