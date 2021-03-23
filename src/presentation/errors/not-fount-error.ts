export class NotFoundError extends Error {
  constructor () {
    super('A file doesn\'t exist at that address')
    this.name = 'A file doesn\'t exist at that database'
  }
}
