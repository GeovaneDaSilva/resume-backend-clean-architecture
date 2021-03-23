declare namespace Express {
  interface Request {
    user?: any
    decoded?: any
    password_hash: any
  }

  interface UserDb {
    password_hash?: any
  }
}
