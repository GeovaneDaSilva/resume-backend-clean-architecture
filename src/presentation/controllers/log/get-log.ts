import LogService from '../../../services/logService'
import { notFound, serverError, success } from '../../helpers/http-helper'
import { HttpResponse, Controller, GetLog } from './log-protocols'

export class GetLogController implements Controller {
  constructor (private readonly getLog: GetLog) {
    this.getLog = getLog
  }

  async handle (): Promise<HttpResponse> {
    try {
      const logDB: any = await LogService.get()
      if (!logDB) {
        return notFound('')
      }
      const account = await this.getLog.get(logDB)
      if (!account) {
        return notFound('')
      }

      return success(account)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
