import { NoReadyExist, ServerError } from '../errors'
import { HttpResponse } from '../interfaces/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const unauthorized = (error: Error): HttpResponse => ({
  statusCode: 401,
  body: { error: error.message }
})

export const notFound = (data: any): HttpResponse => ({
  statusCode: 404,
  body: new NoReadyExist(data)
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
