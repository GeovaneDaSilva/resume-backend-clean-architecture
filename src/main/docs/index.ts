import { serverError, badRequest, unauthorized } from './components'
import { loginPath } from './login-path'
import { accountSchema } from './schemas/login/account-schema'
import { errorSchema } from './schemas/login/error-schema'
import { loginParamsSchema } from './schemas/login/login-params-schema'
import { signupParamsSchema } from './schemas/signup/signup-params-schema'
import { signupSchema } from './schemas/signup/signup-schema'
import { signupPath } from './signup-path'
export default {
  openapi: '3.0.0',
  info: {
    title: 'API Node With Clean Architecture',
    description: 'API resume - Geovane Da Silva',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath, // route
    '/signup': signupPath // route

  },
  schemas: {
    account: accountSchema, // response
    loginParams: loginParamsSchema, // request

    signup: signupSchema, // response
    signupParams: signupParamsSchema, // reques

    error: errorSchema
  },
  components: {
    badRequest,
    serverError,
    unauthorized
  }

}
