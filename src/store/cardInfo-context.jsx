import React, { useEffect, useState } from 'react'
import {
  isInvalidCardNumber,
  isInvalidCVC,
  isInvalidDueDate,
  isInvalidOwner,
  isInvalidPassword,
} from 'validation'

import { CARD_NUMBER, DUE_DATE, CVC, MONTH, ERROR_MESSAGE } from 'constant'

const CardInfoContext = React.createContext()

const initialCardInfo = {
  company: '',
  cardNumber: { first: '', second: '', third: '', fourth: '' },
  dueDate: { month: '', year: '' },
  owner: '',
  cvc: '',
  password: { first: '', second: '' },
  cardNickName: '',
}

const initialError = {
  cardNumber: { error: false, errorMessage: '' },
  dueDate: { error: false, errorMessage: '' },
}

export function CardInfoProvider({ children }) {
  const [cardInfo, setCardInfo] = useState(initialCardInfo)
  const [isFieldFulfilled, setIsFieldFulfilled] = useState(false)
  const [isError, setIsError] = useState(initialError)

  useEffect(() => {
    setIsFieldFulfilled(
      cardInfo.company &&
        Object.values(cardInfo.cardNumber).every(
          (number) => number.length === CARD_NUMBER.UNIT_LENGTH
        ) &&
        Object.values(cardInfo.dueDate).every(
          (number) => number.length === DUE_DATE.UNIT_LENGTH
        ) &&
        cardInfo.cvc.length === CVC.UNIT_LENGTH &&
        cardInfo.password.first &&
        cardInfo.password.second
    )
  }, [cardInfo])

  const handleCardCompany = (company) => {
    setCardInfo((prev) => {
      return { ...prev, company: company }
    })
  }

  const handleCardNumberChange = (e) => {
    const {
      value,
      dataset: { key },
    } = e.target

    if (isInvalidCardNumber(value)) return

    setCardInfo((prev) => {
      return { ...prev, cardNumber: { ...prev.cardNumber, [key]: value } }
    })

    // 이미 존재하는 카드번호인지 확인
    if (localStorage.getItem('cardList') && key === 'fourth') {
      const cardList = JSON.parse(localStorage.getItem('cardList'))
      const { first, second, third } = cardInfo.cardNumber
      setIsError((prev) => {
        return {
          ...prev,
          cardNumber: {
            error: Object.keys(cardList).includes(
              first + second + third + value
            ),
            errorMessage: ERROR_MESSAGE.EXISTING_CARD_NUMBER,
          },
        }
      })
    }
  }

  const handleDueDateChange = (e) => {
    const {
      value,
      dataset: { key },
    } = e.target

    if (isInvalidDueDate(value)) return

    if (key === 'month') {
      setIsError((prev) => {
        return {
          ...prev,
          dueDate: {
            error: value < MONTH.MIN || value > MONTH.MAX,
            errorMessage: ERROR_MESSAGE.INVALID_MONTH,
          },
        }
      })
    } else {
      const currentYear = new Date().getFullYear().toString().slice(2)
      setIsError((prev) => {
        return {
          ...prev,
          dueDate: {
            error: value < currentYear,
            errorMessage: ERROR_MESSAGE.INVALID_YEAR,
          },
        }
      })
    }

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
    const { value } = e.target

    setCardInfo((prev) => {
      return { ...prev, cardNickName: value }
    })
  }

  const clearContext = () => {
    setCardInfo(initialCardInfo)
  }

  return (
    <CardInfoContext.Provider
      value={{
        cardInfo,
        isFieldFulfilled,
        isError,
        handleCardCompany,
        handleCardNumberChange,
        handleDueDateChange,
        handleOwnerChange,
        handleCvcChange,
        handlePasswordChange,
        handleCardNickNameChange,
        clearContext,
      }}
    >
      {children}
    </CardInfoContext.Provider>
  )
}

export default CardInfoContext
