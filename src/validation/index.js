import { CARD_NUMBER, DUE_DATE, OWNER, CVC, PASSWORD } from 'constant'

const validateIsNumber = (value) => isNaN(value)

const validateCardNumber = (value) =>
  value.length > CARD_NUMBER.UNIT_LENGTH && validateIsNumber(value)

const validateDueDate = (value) =>
  value.length > DUE_DATE.UNIT_LENGTH && validateIsNumber(value)

const validateOwner = (value) => value.length > OWNER.MAX_LENGTH

const validateCVC = (value) =>
  value.length > CVC.UNIT_LENGTH && validateIsNumber(value)

const validatePassword = (value) =>
  value.length > PASSWORD.UNIT_LENGTH && validateIsNumber(value)

export {
  validateCardNumber,
  validateDueDate,
  validateOwner,
  validateCVC,
  validatePassword,
}
