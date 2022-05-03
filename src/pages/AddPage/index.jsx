import { useState, useEffect } from 'react'

import Card from 'components/common/Card'
import Button from 'components/common/Button'
import Header from 'components/common/Header'

import { PageWrapper, CardWrapper, FooterWrapper } from 'pages/AddPage/style'

import { CARD_NUMBER, DUE_DATE, CVC, COLORS } from 'constant'

import CardNumberForm from 'components/CardNumberForm'
import DueDateForm from 'components/DueDateForm'
import OwnerForm from 'components/OwnerForm'
import CVCForm from 'components/CVCForm'
import PasswordForm from 'components/PasswordForm'

function AddPage() {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', ''])
  const [dueDate, setDueDate] = useState({ month: '', year: '' })
  const [owner, setOwner] = useState('')
  const [cvc, setCvc] = useState('')
  const [password, setPassword] = useState({
    firstPassword: '',
    secondPassword: '',
  })
  const [isFormFulfilled, setIsFormFulfilled] = useState(false)
  const [error, setError] = useState({ dueMonth: false, dueYear: false })

  useEffect(() => {
    setIsFormFulfilled(
      cardNumbers.join('').length === CARD_NUMBER.UNIT_LENGTH * 4 &&
        dueDate.month.length === DUE_DATE.UNIT_LENGTH &&
        dueDate.year.length === DUE_DATE.UNIT_LENGTH &&
        cvc.length === CVC.UNIT_LENGTH &&
        password.firstPassword &&
        password.secondPassword
    )
  }, [cardNumbers, dueDate, owner, cvc, password])

  const handleSubmitChange = () => {
    if (error.dueMonth || error.dueYear) {
      alert('만료일을 확인해주세요')
      return
    }
    alert(`${owner}님의 카드가 등록되었습니다`)
  }

  return (
    <PageWrapper>
      <Header backButton headerText={'카드 추가'} />
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
      <CardNumberForm
        cardNumbers={cardNumbers}
        setCardNumbers={setCardNumbers}
      />
      <DueDateForm
        dueDate={dueDate}
        setDueDate={setDueDate}
        error={error}
        setError={setError}
      />
      <OwnerForm owner={owner} setOwner={setOwner} />
      <CVCForm cvc={cvc} setCvc={setCvc} />
      <PasswordForm password={password} setPassword={setPassword} />
      <FooterWrapper>
        {isFormFulfilled && (
          <Button color={COLORS.MINT} onClick={handleSubmitChange}>
            다음
          </Button>
        )}
      </FooterWrapper>
    </PageWrapper>
  )
}

export default AddPage
