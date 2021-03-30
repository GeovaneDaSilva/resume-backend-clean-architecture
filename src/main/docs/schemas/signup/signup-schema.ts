export const signupSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    password_hash: {
      type: 'string'
    },
    role: {
      type: 'string'
    },
    date: {
      type: 'string'
    }
  }
}

// response
