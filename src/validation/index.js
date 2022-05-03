import { CARD_NUMBER, DUE_DATE, OWNER, CVC, PASSWORD } from 'constant'

const isNumber = (value) => isNaN(value)

const isInValidCardNumber = (value) =>
  value.length > CARD_NUMBER.UNIT_LENGTH || isNumber(value)

const isInValidDueDate = (value) =>
  value.length > DUE_DATE.UNIT_LENGTH || isNumber(value)

const isInValidOwner = (value) => value.length > OWNER.MAX_LENGTH

const isInValidCVC = (value) =>
  value.length > CVC.UNIT_LENGTH || isNumber(value)

const isInValidPassword = (value) =>
  value.length > PASSWORD.UNIT_LENGTH || isNumber(value)

export {
  isInValidCardNumber,
  isInValidDueDate,
  isInValidOwner,
  isInValidCVC,
  isInValidPassword,
}
