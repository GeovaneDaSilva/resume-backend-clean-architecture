export const badRequest = {
  description: 'Invalid params request',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
