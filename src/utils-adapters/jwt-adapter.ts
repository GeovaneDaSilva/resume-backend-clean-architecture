import jwt from 'jsonwebtoken'
import { AuthenticationToken } from '../presentation/interfaces/jwt-token'

export class JwtAdapter implements AuthenticationToken {
  constructor (private readonly seed, private readonly expire) {
    this.seed = seed
    this.expire = expire
  }

  async token (value: string): Promise<string> {
    const token = await jwt.sign({
      value: value
    }, this.seed, { expiresIn: this.expire })
    return token
  }
}
