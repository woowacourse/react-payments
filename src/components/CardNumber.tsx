import Title from './common/Title'
import Label from './common/Label'
import Input from './common/Input'
import Spacing from './common/Spacing'
import ErrorMessage from './common/ErrorMessage'
import { Dispatch, useState, SetStateAction } from 'react'

interface CardNumberProps {
  cardNumber: Record<SequenceType, string>
  setCardNumber: Dispatch<SetStateAction<Record<SequenceType, string>>>
}

export type SequenceType = 'first' | 'second' | 'third' | 'fourth'

interface HandleInputChangeProps {
  sequence: string
  value: string
}

export default function CardNumber({ cardNumber, setCardNumber }: CardNumberProps) {
  const [errorMassage, setErrorMassage] = useState('')
  const handleInputChange = ({ value, sequence }: HandleInputChangeProps) => {
    if (/^[0-9]*$/.test(value)) {
      setCardNumber({ ...cardNumber, [sequence]: value })
      setErrorMassage('')
      return
    }

    setErrorMassage('숫자만 입력 가능합니다.')
  }
  return (
    <div>
      <Title description="본인 명의의 카드만 결제 가능합니다.">결제할 카드 번호를 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-number">카드 번호</Label>
      <Spacing size={8} />
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.first}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              sequence: 'first',
            })
          }
        />
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.second}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              sequence: 'second',
            })
          }
        />
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.third}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              sequence: 'third',
            })
          }
        />
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.fourth}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              sequence: 'fourth',
            })
          }
        />
      </div>
      <Spacing size={8} />
      {errorMassage && <ErrorMessage>{errorMassage}</ErrorMessage>}
    </div>
  )
}
