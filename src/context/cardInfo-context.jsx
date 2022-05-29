import React, { useEffect, useState, useReducer } from 'react'
import reducer from 'context/reducer'

import { CARD_NUMBER, DUE_DATE, CVC } from 'constants'

const CardInfoContext = React.createContext()

const CHANGE_CARD_COMPANY = 'CHANGE_CARD_COMPANY'
const CHANGE_CARD_INFO = 'CHANGE_CARD_INFO'
const CLEAR_CARD_INFO = 'CLEAR_CARD_INFO'

const initialCardInfo = {
  company: '',
  cardNumber: { first: '', second: '', third: '', fourth: '' },
  dueDate: { month: '', year: '' },
  owner: '',
  cvc: '',
  password: { first: '', second: '' },
}

const initialError = {
  cardNumber: { error: false, errorMessage: '' },
  dueMonth: { error: false, errorMessage: '' },
  dueYear: { error: false, errorMessage: '' },
}

function CardInfoProvider({ children }) {
  const [cardInfo, dispatch] = useReducer(reducer, initialCardInfo)
  const [isError, setIsError] = useState(initialError)
  const [isFormFulfilled, setIsFormFulfilled] = useState(false)

  useEffect(() => {
    setIsFormFulfilled(
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

  const setCardCompany = (company) => {
    dispatch({ type: CHANGE_CARD_COMPANY, name: 'company', value: company })
  }

  const setCardNumber = (target, key) => {
    const { value } = target

    dispatch({
      type: CHANGE_CARD_INFO,
      name: 'cardNumber',
      key: key,
      value: value,
    })
  }

  const setDueDate = (target, key) => {
    const { value } = target

    dispatch({
      type: CHANGE_CARD_INFO,
      name: 'dueDate',
      key: key,
      value: value,
    })
  }

  const setOwner = (target) => {
    const { value } = target

    dispatch({
      type: CHANGE_CARD_INFO,
      name: 'owner',
      value: value.toUpperCase(),
    })
  }

  const setCvc = (target) => {
    const { value } = target

    dispatch({
      type: CHANGE_CARD_INFO,
      name: 'cvc',
      value: value,
    })
  }

  const setPassword = (target, key) => {
    const { value } = target

    dispatch({
      type: CHANGE_CARD_INFO,
      name: 'password',
      key: key,
      value: value,
    })
  }

  const clearCardInfo = () => {
    dispatch({
      type: CLEAR_CARD_INFO,
    })
  }

  return (
    <CardInfoContext.Provider
      value={{
        cardInfo,
        isFormFulfilled,
        isError,
        setIsError,
        setCardCompany,
        setCardNumber,
        setDueDate,
        setOwner,
        setCvc,
        setPassword,
        clearCardInfo,
      }}
    >
      {children}
    </CardInfoContext.Provider>
  )
}

export default CardInfoContext

export {
  CardInfoProvider,
  initialCardInfo,
  CHANGE_CARD_COMPANY,
  CHANGE_CARD_INFO,
  CLEAR_CARD_INFO,
}
