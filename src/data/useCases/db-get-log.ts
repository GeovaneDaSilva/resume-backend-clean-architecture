import { GetLog, GetLogModel } from '../../domain/useCases/get-log'

export class GetLogAccount implements GetLog {
  async get (account: GetLogModel): Promise<GetLogModel> {
    return new Promise(resolve => resolve(
      account
    ))
  }
}
