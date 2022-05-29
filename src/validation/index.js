import { CARD_NUMBER, DUE_DATE, OWNER, CVC, PASSWORD } from 'constants'

const isNumber = (value) => isNaN(value)

const isInvalidCardNumber = (value) =>
  value.length > CARD_NUMBER.UNIT_LENGTH || isNumber(value)

const isInvalidDueDate = (value) =>
  value.length > DUE_DATE.UNIT_LENGTH || isNumber(value)

const isInvalidOwner = (value) =>
  value.length > OWNER.MAX_LENGTH || /[^a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣\s]/.test(value)

const isInvalidCVC = (value) =>
  value.length > CVC.UNIT_LENGTH || isNumber(value)

const isInvalidPassword = (value) =>
  value.length > PASSWORD.UNIT_LENGTH || isNumber(value)

export {
  isInvalidCardNumber,
  isInvalidDueDate,
  isInvalidOwner,
  isInvalidCVC,
  isInvalidPassword,
}
