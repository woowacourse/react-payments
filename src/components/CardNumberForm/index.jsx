import { useRef } from 'react'
import Form from 'components/common/Form'
import PropTypes from 'prop-types'

import { isInvalidCardNumber } from 'validation'
import { CARD_NUMBER } from 'constant'

function CardNumberForm({ cardNumbers, setCardNumbers }) {
  const firstCardNumberInputRef = useRef()
  const secondCardNumberInputRef = useRef()
  const thirdCardNumberInputRef = useRef()
  const fourthCardNumberInputRef = useRef()

  const cardNumberInputRefs = [
    firstCardNumberInputRef,
    secondCardNumberInputRef,
    thirdCardNumberInputRef,
    fourthCardNumberInputRef,
  ]

  const focusNextNumberInput = (index) => {
    cardNumberInputRefs[index + 1]?.current.focus()
  }

  const handleCardNumberChange = ({ target: { value } }, index) => {
    if (isInvalidCardNumber(value)) return

    setCardNumbers((prev) => {
      const newState = [...prev]
      newState[index] = value
      return newState
    })

    if (value.length >= CARD_NUMBER.UNIT_LENGTH) {
      focusNextNumberInput(index)
    }
  }

  return (
    <Form
      label="카드 번호"
      inputInfo={[
        {
          type: 'number',
          id: 'first-card-number',
          value: cardNumbers[0],
          ref: cardNumberInputRefs[0],
        },
        {
          type: 'number',
          id: 'second-card-number',
          value: cardNumbers[1],
          ref: cardNumberInputRefs[1],
        },
        {
          type: 'password',
          id: 'third-card-number',
          value: cardNumbers[2],
          ref: cardNumberInputRefs[2],
        },
        {
          type: 'password',
          id: 'fourth-card-number',
          value: cardNumbers[3],
          ref: cardNumberInputRefs[3],
        },
      ]}
      onChange={handleCardNumberChange}
    />
  )
}

CardNumberForm.propTypes = {
  cardNumbers: PropTypes.array,
  setCardNumbers: PropTypes.func,
}

export default CardNumberForm
