import React, { useContext } from 'react'
import Field from 'components/common/Field'

import CardInfoContext from 'context/cardInfo-context'

import useAutoFocus from 'hooks/useAutoFocus'

import Input from 'components/common/Input'
import { GrayInputWrapper } from 'components/common/Input/style'

import { CARD_NUMBER, ERROR_MESSAGE } from 'constants/index'
import { isInvalidCardNumber } from 'validation'
import useLocalStorage from 'hooks/useLocalStorage'

function CardNumberField() {
  const {
    cardInfo: { cardNumber },
    isError: {
      cardNumber: { error, errorMessage },
    },
    setCardNumber,
    setIsError,
  } = useContext(CardInfoContext)

  const { refList, moveToNextInput } = useAutoFocus({
    maxLength: [
      CARD_NUMBER.UNIT_LENGTH,
      CARD_NUMBER.UNIT_LENGTH,
      CARD_NUMBER.UNIT_LENGTH,
      CARD_NUMBER.UNIT_LENGTH,
    ],
  })
  const [cardList] = useLocalStorage('cardList')

  const handleInputChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const { value } = target
    if (isInvalidCardNumber(value)) return

    setCardNumber(target, key)

    if (key === 'fourth') {
      const { first, second, third } = cardNumber
      setIsError((prev: object) => {
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
      <GrayInputWrapper error={error}>
        {Object.entries(cardNumber).map(([key, value], index) => (
          <React.Fragment key={`${key}-card-input`}>
            <Input
              type={key === 'first' || key === 'second' ? 'text' : 'password'}
              value={value}
              maxLength={CARD_NUMBER.UNIT_LENGTH}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange(e, key)
              }
              ref={(node: HTMLInputElement) => {
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

export default CardNumberField
