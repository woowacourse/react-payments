import React, { useEffect, useState, useReducer } from 'react'
import reducer from 'context/reduce'
import { initialCardInfo } from 'context/constant'

import { CARD_NUMBER, DUE_DATE, CVC } from 'constant'

const CardInfoContext = React.createContext()

const initialError = {
  cardNumber: { error: false, errorMessage: '' },
  dueDate: { error: false, errorMessage: '' },
}

export function CardInfoProvider({ children }) {
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

  const handleCardCompany = (company) => {
    dispatch({ type: 'CHANGE_CARD_COMPANY', name: 'company', value: company })
  }

  const handleCardNumberChange = (target, key) => {
    const { value } = target

    dispatch({
      type: 'CHANGE_CARD_INFO',
      name: 'cardNumber',
      key: key,
      value: value,
    })
  }

  const handleDueDateChange = (target, key) => {
    const { value } = target

    dispatch({
      type: 'CHANGE_CARD_INFO',
      name: 'dueDate',
      key: key,
      value: value,
    })
  }

  const handleOwnerChange = (e) => {
    const { value } = e.target

    dispatch({
      type: 'CHANGE_CARD_INFO',
      name: 'owner',
      value: value,
    })
  }

  const handleCvcChange = (e) => {
    const { value } = e.target

    dispatch({
      type: 'CHANGE_CARD_INFO',
      name: 'cvc',
      value: value,
    })
  }

  const handlePasswordChange = (target, key) => {
    const { value } = target

    dispatch({
      type: 'CHANGE_CARD_INFO',
      name: 'password',
      key: key,
      value: value,
    })
  }

  const clearContext = () => {
    dispatch({
      type: 'CLEAR_CARD_INFO',
    })
  }

  return (
    <CardInfoContext.Provider
      value={{
        cardInfo,
        isFormFulfilled,
        isError,
        setIsError,
        handleCardCompany,
        handleCardNumberChange,
        handleDueDateChange,
        handleOwnerChange,
        handleCvcChange,
        handlePasswordChange,
        clearContext,
      }}
    >
      {children}
    </CardInfoContext.Provider>
  )
}

export default CardInfoContext
