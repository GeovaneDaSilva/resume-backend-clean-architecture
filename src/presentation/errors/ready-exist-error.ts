export class ReadyExist extends Error {
  constructor (paramName: string) {
    super(`This information already exists in our database: ${paramName}`)

    this.name = `This information already exists in our database: ${paramName}`
  }
}

export class NoReadyExist extends Error {
  constructor (paramName: string) {
    super(`This does not exist in our database: ${paramName}`)

    this.name = `This does not exist in our database: ${paramName}`
  }
}
