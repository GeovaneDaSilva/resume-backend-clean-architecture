export class ServerError extends Error {
  constructor (stack: string) {
    super('Error Internal the Server')
    this.name = 'Error Internal the Server'
    this.stack = stack
  }
}
