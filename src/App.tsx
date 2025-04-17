import './App.css'
import * as S from './App.styles'
import CardNumber from './components/CardNumber'
import CardExpirationDate from './components/CardExpirationDate'
import CardCVCNumber from './components/CardCVCNumber'
import CardPreview from './components/CardPreview'
import Spacing from './components/common/Spacing'
import { useState } from 'react'
import { SequenceType } from './components/CardNumber'
import { dateType } from './components/CardExpirationDate'

const getCardType = (cardNumberFirst: string) => {
  if (['4'].some((value) => cardNumberFirst.startsWith(value))) return 'visa'
  if (['51', '52', '53', '54', '55'].some((value) => cardNumberFirst.startsWith(value))) return 'master'
  return ''
}

function App() {
  const [cardNumber, setCardNumber] = useState<Record<SequenceType, string>>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  })
  const cardType = getCardType(cardNumber.first)

  const [cardExpirationDate, setCardExpirationDate] = useState<Record<dateType, string>>({
    month: '',
    year: '',
  })

  const [cardCVCNumber, setCardCVCNumber] = useState<string>('')

  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  })

  const [cardExpirationDateErrorMessage, setCardExpirationDateErrorMessage] = useState<Record<dateType, string>>({
    month: '',
    year: '',
  })

  const [cardCVCNumberErrorMessage, setCardCVCNumberErrorMessage] = useState<string>('')
  return (
    <S.Wrapper>
      <S.CardPreviewWrapper>
        <CardPreview cardType={cardType} cardNumber={cardNumber} cardExpirationDate={cardExpirationDate} />
      </S.CardPreviewWrapper>
      <Spacing size={60} />
      <S.CardInfoForm>
        <CardNumber
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cardNumberErrorMessage={cardNumberErrorMessage}
          setCardNumberErrorMessage={setCardNumberErrorMessage}
        />
        <CardExpirationDate
          cardExpirationDate={cardExpirationDate}
          setCardExpirationDate={setCardExpirationDate}
          cardExpirationDateErrorMessage={cardExpirationDateErrorMessage}
          setCardExpirationDateErrorMessage={setCardExpirationDateErrorMessage}
        />
        <CardCVCNumber
          cardCVCNumber={cardCVCNumber}
          setCardCVCNumber={setCardCVCNumber}
          cardCVCNumberErrorMessage={cardCVCNumberErrorMessage}
          setCardCVCNumberErrorMessage={setCardCVCNumberErrorMessage}
        />
      </S.CardInfoForm>
    </S.Wrapper>
  )
}

export default App
