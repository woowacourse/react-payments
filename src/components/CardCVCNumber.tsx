import Title from './common/Title'
import Label from './common/Label'
import Input from './common/Input'
import Spacing from './common/Spacing'

import ErrorMessage from './common/ErrorMessage'
import { Dispatch, useState, SetStateAction } from 'react'

interface CardCVCNumberProps {
  cardCVCNumber: string
  setCardCVCNumber: Dispatch<SetStateAction<string>>
}

export default function CardCVCNumber({ cardCVCNumber, setCardCVCNumber }: CardCVCNumberProps) {
  const [errorMassage, setErrorMassage] = useState('')
  const handleInputChange = (value: string) => {
    if (/^[0-9]*$/.test(value)) {
      setCardCVCNumber(value)
      setErrorMassage('')
      return
    }

    setErrorMassage('숫자만 입력 가능합니다.')
  }

  return (
    <div>
      <Title>CVC 번호를 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-cvc-number">CVC</Label>
      <Spacing size={8} />
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Input
          placeholder="123"
          maxLength={3}
          value={cardCVCNumber}
          onChange={(event) => handleInputChange(event.target.value)}
        />
      </div>
      <Spacing size={8} />
      {errorMassage && <ErrorMessage>{errorMassage}</ErrorMessage>}
    </div>
  )
}
