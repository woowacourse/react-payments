import * as S from './CardExpirationDate.styles'
import Title from './common/Title'
import Label from './common/Label'
import Input from './common/Input'
import Spacing from './common/Spacing'
import ErrorMessage from './common/ErrorMessage'
import { Dispatch, SetStateAction } from 'react'

interface CardExpirationDateProps {
  cardExpirationDate: Record<string, string>
  setCardExpirationDate: Dispatch<SetStateAction<Record<string, string>>>
  cardExpirationDateErrorMessage: Record<string, string>
  setCardExpirationDateErrorMessage: Dispatch<SetStateAction<Record<string, string>>>
}

export type dateType = 'month' | 'year'

interface HandleInputChangeProps {
  dateType: string
  value: string
}

export default function CardExpirationDate({
  cardExpirationDate,
  setCardExpirationDate,
  cardExpirationDateErrorMessage,
  setCardExpirationDateErrorMessage,
}: CardExpirationDateProps) {
  const handleInputChange = ({ value, dateType }: HandleInputChangeProps) => {
    setCardExpirationDate({ ...cardExpirationDate, [dateType]: value })
    setCardExpirationDateErrorMessage({
      ...cardExpirationDateErrorMessage,
      [dateType]: '',
    })

    if (!/^[0-9]*$/.test(value)) {
      setCardExpirationDateErrorMessage({ ...cardExpirationDateErrorMessage, [dateType]: '숫자만 입력 가능합니다.' })
      return
    }

    const valueAsNumber = parseInt(value, 10)

    if (dateType === 'month') {
      if (valueAsNumber < 0 || valueAsNumber > 12 || value === '00') {
        setCardExpirationDateErrorMessage({ ...cardExpirationDateErrorMessage, [dateType]: '유효하지 않은 월입니다.' })
      }
    }

    if (dateType === 'year') {
      if (valueAsNumber < Number(String(new Date().getFullYear()).slice(2))) {
        setCardExpirationDateErrorMessage({
          ...cardExpirationDateErrorMessage,
          [dateType]: '유효 기간이 지난 연도입니다.',
        })
      }
    }
  }

  return (
    <div>
      <Title description="월/년도(MMYY)를 순서대로 입력해 주세요.">카드 유효기간을 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-expiration-date">유효기간</Label>
      <Spacing size={8} />
      <S.InputWrapper>
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
          isError={cardExpirationDateErrorMessage.month !== ''}
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
          isError={cardExpirationDateErrorMessage.year !== ''}
        />
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>
        {
          Object.entries(cardExpirationDateErrorMessage)
            .filter(([_, errorMassage]) => errorMassage !== '')
            .at(0)?.[1]
        }
      </ErrorMessage>
    </div>
  )
}
