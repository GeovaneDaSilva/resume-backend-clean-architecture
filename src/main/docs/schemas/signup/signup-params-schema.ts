export const signupParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    passwordConfirmarion: {
      type: 'string'
    },
    role: {
      type: 'string'
    }
  },
  required: ['name', 'email', 'password', 'passwordConfirmarion', 'role']
}

// request
