import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Card from 'components/common/Card'
import Button from 'components/common/Button'
import Header from 'components/common/Header'

import {
  PageWrapper,
  CardWrapper,
  FooterWrapper,
  FormWrapper,
  GridWrapper,
} from 'pages/style'

import { COLORS, CARD_COMPANY, ALERT_MESSAGE } from 'constant'

import CardNumberField from 'components/CardNumberField'
import DueDateField from 'components/DueDateField'
import OwnerField from 'components/OwnerField'
import CVCField from 'components/CVCField'
import PasswordField from 'components/PasswordField'

import CardInfoContext from 'store/cardInfo-context'
import Modal from 'components/common/Modal'
import CardCompany from 'components/common/CardCompany'

function AddPage() {
  const {
    cardInfo,
    isError: { cardNumber, dueDate },
    isFieldFulfilled,
    handleCardCompany,
  } = useContext(CardInfoContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()

  const openModal = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cardNumber.error) {
      return alert(ALERT_MESSAGE.CHECK_CARD_NUMBER)
    }
    if (dueDate.error) {
      return alert(ALERT_MESSAGE.CHECK_DUE_DATE)
    }
    navigate('/react-payments/complete')
  }

  return (
    <PageWrapper>
      <Header backButton>카드 추가</Header>
      <CardWrapper onClick={openModal}>
        <Card size="small" cardInfo={cardInfo} />
      </CardWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <CardNumberField />
        <DueDateField />
        <OwnerField />
        <CVCField />
        <PasswordField />
        <FooterWrapper>
          {isFieldFulfilled && (
            <Button type={'submit'} color={COLORS.MINT} onClick={handleSubmit}>
              다음
            </Button>
          )}
        </FooterWrapper>
      </FormWrapper>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <GridWrapper>
          {Object.entries(CARD_COMPANY).map(([company, color]) => (
            <CardCompany
              color={color}
              company={company}
              handleClick={() => {
                handleCardCompany(company)
              }}
              key={company}
            />
          ))}
        </GridWrapper>
      </Modal>
    </PageWrapper>
  )
}

export default AddPage
