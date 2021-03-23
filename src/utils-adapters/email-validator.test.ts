import validator from 'email-validator'
import { EmailValidatorAdapter } from './email-validator-adapter'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}
describe('Email Validator', () => {
  test('Should return false validator false', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'validate').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })

  test('Should return false validator true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid_email@mail.com')
    expect(isValid).toBe(true)
  })

  test('Should return correct email validator', () => {
    const sut = new EmailValidatorAdapter()
    const isValidObserver = jest.spyOn(validator, 'validate')
    sut.isValid('valid_email@email.com')
    expect(isValidObserver).toHaveBeenCalledWith('valid_email@email.com')
  })
})
