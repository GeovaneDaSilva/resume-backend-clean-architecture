import { AddLog } from '../../../domain/useCases/add-log'
import UserService from '../../../services/userService'
import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, notFound, serverError, success } from '../../helpers/http-helper'
import { HttpRequest, HttpResponse, Controller, EmailValidator } from './log-protocols'
export class AddDataController implements Controller {
  constructor (private readonly addLog: AddLog,
    private readonly emailValidator: EmailValidator) {
    this.addLog = addLog
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, email, role } = httpRequest.body
      const _id = httpRequest.params._id
      const requiredField = ['id', 'name', 'email', 'role', 'date']
      for (const field of requiredField) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const findUser = await UserService.getById(_id)
      if (!findUser) {
        return notFound(`${_id}`)
      }

      const logDB = await this.addLog.add({
        id: findUser._id, name, email, role, date: new Date()
      })

      return success(logDB)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
