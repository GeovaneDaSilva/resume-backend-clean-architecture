export class AccessDeniedError extends Error {
  constructor () {
    super('Server refuses to give you a file, authentication won\'t help')
    this.name = 'Server refuses to give you a file, authentication won\'t help'
  }
}
