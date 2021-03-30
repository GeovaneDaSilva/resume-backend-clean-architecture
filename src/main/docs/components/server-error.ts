export const serverError = {
  description: '\'Something on the server didn\'t work right\'',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
