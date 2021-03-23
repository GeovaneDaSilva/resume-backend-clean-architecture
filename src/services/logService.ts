import { LogModel } from '../domain/models/log'
import LogRepository from '../domain/repositories/logRepository'

class LogService {
  get () {
    return LogRepository.find()
  }

  getById (id: string) {
    return LogRepository.findById(id)
  }

  async create (data: LogModel) {
    return LogRepository.create(data)
  }

  update (id) {
    return LogRepository.findOneAndUpdate(id)
  }

  delete (id: string, user) {
    return LogRepository.findById(id, user)
  }
}

export default new LogService()
