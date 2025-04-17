/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './App.css'
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
    <div
      css={css`
        width: 480px;
        height: 100vh;
        margin: 0 auto;
        border: 1px solid #000;
        padding: 71px 31px;
        overflow-y: scroll;
      `}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CardPreview cardType={cardType} cardNumber={cardNumber} cardExpirationDate={cardExpirationDate} />
      </div>
      <Spacing size={60} />

      <form style={{ display: 'flex', gap: '32px', flexDirection: 'column' }}>
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
      </form>
    </div>
  )
}

export default App
