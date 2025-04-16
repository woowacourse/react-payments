import Title from './common/Title'
import Label from './common/Label'
import Input from './common/Input'
import Spacing from './common/Spacing'
import { Dispatch, useState, SetStateAction } from 'react'
import ErrorMessage from './common/ErrorMessage'

interface CardExpirationDateProps {
  cardExpirationDate: Record<string, string>
  setCardExpirationDate: Dispatch<SetStateAction<Record<string, string>>>
}

export type dateType = 'month' | 'year'

interface HandleInputChangeProps {
  dateType: string
  value: string
}

export default function CardExpirationDate({ cardExpirationDate, setCardExpirationDate }: CardExpirationDateProps) {
  const [errorMassage, setErrorMassage] = useState('')
  const handleInputChange = ({ value, dateType }: HandleInputChangeProps) => {
    if (!/^[0-9]*$/.test(value)) {
      setErrorMassage('숫자만 입력 가능합니다.')
      return
    }

    setCardExpirationDate({ ...cardExpirationDate, [dateType]: value })

    const valueAsNumber = parseInt(value, 10)

    if (dateType === 'month') {
      if (valueAsNumber < 0 || valueAsNumber > 12 || value === '00') {
        setErrorMassage('유효하지 않은 월입니다.')
        return
      }
      return
    }

    if (dateType === 'year') {
      if (valueAsNumber < Number(String(new Date().getFullYear()).slice(2))) {
        setErrorMassage('유효 기간이 지난 연도입니다.')
        return
      }
    }

    setErrorMassage('')
  }

  return (
    <div>
      <Title description="월/년도(MMYY)를 순서대로 입력해 주세요.">카드 유효기간을 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-expiration-date">유효기간</Label>
      <Spacing size={8} />
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Input
          placeholder="MM"
          maxLength={2}
          value={cardExpirationDate.month}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              dateType: 'month',
            })
          }
        />
        <Input
          placeholder="YY"
          maxLength={2}
          value={cardExpirationDate.year}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              dateType: 'year',
            })
          }
        />
      </div>
      <Spacing size={8} />
      {errorMassage && <ErrorMessage>{errorMassage}</ErrorMessage>}
    </div>
  )
}
