export const unauthorized = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
