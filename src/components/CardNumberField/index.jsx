import React, { useContext } from 'react'
import Field from 'components/common/Field'
import PropTypes from 'prop-types'

import CardInfoContext from 'context/cardInfo-context'

import useAutoFocus from 'hooks/useAutoFocus'

import Input from 'components/common/Input'
import { GrayInputWrapper } from 'components/common/Input/style'

import { CARD_NUMBER, ERROR_MESSAGE } from 'constant'
import { isInvalidCardNumber } from 'validation'

function CardNumberField() {
  const {
    cardInfo: { cardNumber },
    isError: {
      cardNumber: { error, errorMessage },
    },
    handleCardNumberChange,
    setIsError,
  } = useContext(CardInfoContext)

  const { refList, moveToNextInput } = useAutoFocus({
    maxLength: CARD_NUMBER.UNIT_LENGTH,
  })

  const handleInputChange = ({ target }, key) => {
    const { value } = target
    if (isInvalidCardNumber(value)) return

    handleCardNumberChange(target, key)

    const cardListStorage = localStorage.getItem('cardList')
    if (cardListStorage && key === 'fourth') {
      const cardList = JSON.parse(cardListStorage)
      const { first, second, third } = cardNumber
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

    moveToNextInput(target)
  }

  return (
    <Field label="카드 번호" errorMessage={error && errorMessage}>
      <GrayInputWrapper error={error && errorMessage}>
        {Object.entries(cardNumber).map(([key, value], index) => (
          <React.Fragment key={`${key}-card-input`}>
            <Input
              type={key === 'first' || key === 'second' ? 'text' : 'password'}
              value={value}
              dataset={key}
              maxLength={CARD_NUMBER.UNIT_LENGTH}
              onChange={(e) => handleInputChange(e, key)}
              ref={(node) => {
                refList.current[index] = node
              }}
            />
            {key !== 'fourth' && <span>-</span>}
          </React.Fragment>
        ))}
      </GrayInputWrapper>
    </Field>
  )
}

CardNumberField.propTypes = {
  cardNumbers: PropTypes.array,
  setCardNumbers: PropTypes.func,
}

export default CardNumberField
