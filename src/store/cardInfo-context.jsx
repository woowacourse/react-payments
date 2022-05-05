import React, { useEffect, useState } from 'react'
import {
  isInvalidCardNumber,
  isInvalidCVC,
  isInvalidDueDate,
  isInvalidOwner,
  isInvalidPassword,
} from 'validation'

import { CARD_NUMBER, DUE_DATE, CVC } from 'constant'

const CardInfoContext = React.createContext()

export function CardInfoProvider({ children }) {
  const [cardInfo, setCardInfo] = useState({
    company: '',
    cardNumber: { first: '', second: '', third: '', fourth: '' },
    dueDate: { month: '', year: '' },
    owner: '',
    cvc: '',
    password: { first: '', second: '' },
    cardNickName: '',
  })

  const [isFieldFulfilled, setIsFieldFulfilled] = useState(false)

  useEffect(() => {
    setIsFieldFulfilled(
      cardInfo.cardNumber.first.length === CARD_NUMBER.UNIT_LENGTH &&
        cardInfo.cardNumber.second.length === CARD_NUMBER.UNIT_LENGTH &&
        cardInfo.cardNumber.third.length === CARD_NUMBER.UNIT_LENGTH &&
        cardInfo.cardNumber.fourth.length === CARD_NUMBER.UNIT_LENGTH &&
        cardInfo.dueDate.month.length === DUE_DATE.UNIT_LENGTH &&
        cardInfo.dueDate.year.length === DUE_DATE.UNIT_LENGTH &&
        cardInfo.cvc.length === CVC.UNIT_LENGTH &&
        cardInfo.password.first &&
        cardInfo.password.second
    )
  }, [cardInfo])

  const handleCardNumberChange = (e) => {
    const {
      value,
      dataset: { key },
    } = e.target

    if (isInvalidCardNumber(value)) return

    setCardInfo((prev) => {
      return { ...prev, cardNumber: { ...prev.cardNumber, [key]: value } }
    })
  }

  const handleDueDateChange = (e) => {
    const {
      value,
      dataset: { key },
    } = e.target

    if (isInvalidDueDate(value)) return

    setCardInfo((prev) => {
      return { ...prev, dueDate: { ...prev.dueDate, [key]: value } }
    })
  }

  const handleOwnerChange = (e) => {
    const { value } = e.target

    if (isInvalidOwner(value)) return

    setCardInfo((prev) => {
      return { ...prev, owner: value.toUpperCase() }
    })
  }

  const handleCvcChange = (e) => {
    const { value } = e.target

    if (isInvalidCVC(value)) return

    setCardInfo((prev) => {
      return { ...prev, cvc: value }
    })
  }

  const handlePasswordChange = (e) => {
    const {
      value,
      dataset: { key },
    } = e.target

    if (isInvalidPassword(value)) return

    setCardInfo((prev) => {
      return { ...prev, password: { ...prev.password, [key]: value } }
    })
  }

  const handleCardNickNameChange = (e) => {
    const value = e.target

    setCardInfo((prev) => {
      return { ...prev, cardNickName: value }
    })
  }

  return (
    <CardInfoContext.Provider
      value={{
        cardInfo,
        isFieldFulfilled,
        handleCardNumberChange,
        handleDueDateChange,
        handleOwnerChange,
        handleCvcChange,
        handlePasswordChange,
        handleCardNickNameChange,
      }}
    >
      {children}
    </CardInfoContext.Provider>
  )
}

export default CardInfoContext
