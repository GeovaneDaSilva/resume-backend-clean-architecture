import { Cryptography, Dcryptography } from '../infra/cryptgraphy/encryper'
import bcrypt from 'bcrypt'
export class BcryptAdapter implements Cryptography {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hashSync(value, this.salt)
    return hash
  }
}

export class DcryptAdapter implements Dcryptography {
  async dencrypt (value: string, compareSync: string): Promise<Boolean> {
    const comparyHash = await bcrypt.compareSync(value, compareSync)
    return comparyHash
  }
}
