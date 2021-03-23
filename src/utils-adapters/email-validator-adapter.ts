import validator from 'email-validator'
import { EmailValidator } from '../presentation/interfaces/email-validation'
export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return validator.validate(email)
  }
}
