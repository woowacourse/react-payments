import { useState, useEffect } from 'react'

import Card from 'components/common/Card'
import Button from 'components/common/Button'
import Header from 'components/common/Header'

import {
  PageWrapper,
  CardWrapper,
  FooterWrapper,
  FormWrapper,
} from 'pages/AddPage/style'

import { CARD_NUMBER, DUE_DATE, CVC, COLORS } from 'constant'

import CardNumberField from 'components/CardNumberField'
import DueDateField from 'components/DueDateField'
import OwnerField from 'components/OwnerField'
import CVCField from 'components/CVCField'
import PasswordField from 'components/PasswordField'

function AddPage() {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', ''])
  const [dueDate, setDueDate] = useState({ month: '', year: '' })
  const [owner, setOwner] = useState('')
  const [cvc, setCvc] = useState('')
  const [password, setPassword] = useState({
    firstPassword: '',
    secondPassword: '',
  })
  const [isFieldFulfilled, setIsFieldFulfilled] = useState(false)
  const [error, setError] = useState({ dueMonth: false, dueYear: false })

  useEffect(() => {
    setIsFieldFulfilled(
      cardNumbers.join('').length === CARD_NUMBER.UNIT_LENGTH * 4 &&
        dueDate.month.length === DUE_DATE.UNIT_LENGTH &&
        dueDate.year.length === DUE_DATE.UNIT_LENGTH &&
        cvc.length === CVC.UNIT_LENGTH &&
        password.firstPassword &&
        password.secondPassword
    )
  }, [cardNumbers, dueDate, owner, cvc, password])

  const handleSubmitChange = (e) => {
    e.preventDefault()
    if (error.dueMonth || error.dueYear) {
      alert('만료일을 확인해주세요')
      return
    }
    alert(`${owner}님의 카드가 등록되었습니다`)
  }

  return (
    <PageWrapper>
      <Header backButton>카드 추가</Header>
      <CardWrapper>
        <Card
          size="small"
          company="우테코"
          cardNumbers={cardNumbers}
          owner={owner || 'NAME'}
          dueMonth={dueDate.month || 'MM'}
          dueYear={dueDate.year || 'YY'}
        />
      </CardWrapper>
      <FormWrapper onSubmit={handleSubmitChange}>
        <CardNumberField
          cardNumbers={cardNumbers}
          setCardNumbers={setCardNumbers}
        />
        <DueDateField
          dueDate={dueDate}
          setDueDate={setDueDate}
          error={error}
          setError={setError}
        />
        <OwnerField owner={owner} setOwner={setOwner} />
        <CVCField cvc={cvc} setCvc={setCvc} />
        <PasswordField password={password} setPassword={setPassword} />
        <FooterWrapper>
          {isFieldFulfilled && (
            <Button type={'submit'} color={COLORS.MINT}>
              다음
            </Button>
          )}
        </FooterWrapper>
      </FormWrapper>
    </PageWrapper>
  )
}

export default AddPage
