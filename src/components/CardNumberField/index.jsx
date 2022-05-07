import React, { useContext } from 'react'
import Field from 'components/common/Field'
import PropTypes from 'prop-types'

import CardInfoContext from 'store/cardInfo-context'

import useAutoFocus from 'hooks/useAutoFocus'

import Input from 'components/common/Input'
import { GrayInputWrapper } from 'components/common/Input/style'

import { CARD_NUMBER } from 'constant'

function CardNumberField() {
  const {
    cardInfo: { cardNumber },
    isError: {
      cardNumber: { error, errorMessage },
    },
    handleCardNumberChange,
  } = useContext(CardInfoContext)

  const { refList, moveToNextInput } = useAutoFocus({
    maxLength: CARD_NUMBER.UNIT_LENGTH,
  })

  const handleInputChange = (e) => {
    handleCardNumberChange(e)
    moveToNextInput(e)
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
              onChange={handleInputChange}
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
