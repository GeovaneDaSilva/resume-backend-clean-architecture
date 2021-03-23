import { AccountModel } from '../domain/models/account'
import UserRepository from '../domain/repositories/userRepository'

class UserService {
  async get () {
    return UserRepository.find({}, 'name email role password_hash created_date')
  }

  async getOne (email: string) {
    return UserRepository.findOne({ email })
  }

  async getById (id: string) {
    return UserRepository.findById(id, 'name email role password_hash created_date')
  }

  async create (user: AccountModel) {
    return UserRepository.create(user)
  }

  async update (id, user) {
    return UserRepository.findByIdAndUpdate(id, user, { new: true, useFindAndModify: true })
  }

  async delete (id: string) {
    return UserRepository.findByIdAndDelete(id)
  }
}

export default new UserService()
