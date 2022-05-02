import { useState, useRef, useEffect } from 'react'

import Card from 'components/Card'
import Button from 'components/Button'
import Header from 'components/Header'
import Form from 'components/Form'
import PasswordForm from 'components/PasswordForm'

import { PageWrapper, CardWrapper, FooterWrapper } from 'pages/AddPage/style'

import {
  CARD_NUMBER,
  DUE_DATE,
  OWNER,
  CVC,
  PASSWORD,
  COLORS,
  MONTH,
} from 'constant'

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

  const firstCardNumberInputRef = useRef()
  const secondCardNumberInputRef = useRef()
  const thirdCardNumberInputRef = useRef()
  const fourthCardNumberInputRef = useRef()

  const dueYearInputRef = useRef()

  const secondPasswordInputRef = useRef()

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
    if (value.length > CARD_NUMBER.UNIT_LENGTH || isNaN(value)) return

    setCardNumbers((prev) => {
      const newState = [...prev]
      newState[index] = value
      return newState
    })

    if (value.length >= CARD_NUMBER.UNIT_LENGTH) {
      focusNextNumberInput(index)
    }
  }

  const handleDueDateChange = ({ target: { value } }, key) => {
    if (value.length > DUE_DATE.UNIT_LENGTH) return

    setDueDate((prev) => {
      const newState = { ...prev }
      newState[key] = value
      return newState
    })

    if (key === 'month') {
      setError((prev) => {
        const newState = { ...prev }
        newState.dueMonth = +value > MONTH.MAX || +value < MONTH.MIN
        return newState
      })
    } else {
      const currentYear = new Date().getFullYear().toString().slice(2)
      setError((prev) => {
        const newState = { ...prev }
        newState.dueYear = +value < currentYear
        return newState
      })
    }

    if (value.length >= DUE_DATE.UNIT_LENGTH) {
      dueYearInputRef.current.focus()
    }
  }

  const handleOwnerChange = ({ target: { value } }) => {
    if (value.length > OWNER.MAX_LENGTH) return

    setOwner(value)
  }

  const handleCvc = ({ target: { value } }) => {
    if (value.length > CVC.UNIT_LENGTH || isNaN(value)) return

    setCvc(value)
  }

  const handlePasswordChange = ({ target: { value } }, key) => {
    if (value.length > PASSWORD.UNIT_LENGTH || isNaN(value)) return

    setPassword((prev) => {
      const newState = { ...prev }
      newState[key] = value
      return newState
    })

    if (value.length >= 1) {
      secondPasswordInputRef.current.focus()
    }
  }

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
      <Form
        label="만료일"
        size={50}
        inputInfo={[
          {
            type: 'number',
            id: 'due-month',
            value: dueDate.month,
            placeholder: 'MM',
            key: 'month',
          },
          {
            type: 'number',
            id: 'due-year',
            value: dueDate.year,
            ref: dueYearInputRef,
            placeholder: 'YY',
            key: 'year',
          },
        ]}
        error={error.dueMonth || error.dueYear}
        onChange={handleDueDateChange}
      />
      <Form
        label="카드 소유자 이름 (선택)"
        countHelper={OWNER.MAX_LENGTH}
        inputInfo={[
          {
            type: 'string',
            id: 'owner',
            value: owner,
            placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
          },
        ]}
        onChange={handleOwnerChange}
      />
      <Form
        label="보안 코드(CVC/CVV)"
        size={30}
        questionHelper
        inputInfo={[{ type: 'password', id: 'cvc', value: cvc }]}
        onChange={handleCvc}
        helpText="카드 뒷면의 7자리 숫자 중 마지막 3자리"
      />
      <PasswordForm
        label="카드 비밀번호"
        size={12}
        inputInfo={[
          {
            type: 'password',
            id: 'first-password',
            value: password.secondPassword,
            key: 'firstPassword',
          },
          {
            type: 'password',
            id: 'second-password',
            value: password.secondPassword,
            key: 'secondPassword',
            ref: secondPasswordInputRef,
          },
        ]}
        onChange={handlePasswordChange}
      />
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
