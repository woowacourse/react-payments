import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Card from 'components/common/Card'
import Button from 'components/common/Button'
import Header from 'components/common/Header'
import Modal from 'components/common/Modal'
import CardCompany from 'components/common/CardCompany'

import CardNumberField from 'components/AddCard/CardNumberField'
import DueDateField from 'components/AddCard/DueDateField'
import OwnerField from 'components/AddCard/OwnerField'
import CVCField from 'components/AddCard/CVCField'
import PasswordField from 'components/AddCard/PasswordField'

import {
  PageWrapper,
  CardWrapper,
  FooterWrapper,
  FormWrapper,
  GridWrapper,
} from 'pages/style'

import { COLORS, CARD_COMPANY, ALERT_MESSAGE } from 'constant'

import CardInfoContext from 'context/cardInfo-context'

function AddPage() {
  const {
    cardInfo,
    isError: { cardNumber, dueMonth, dueYear },
    isFormFulfilled,
    handleCardCompany,
  } = useContext(CardInfoContext)
  const [isModalOpen, setIsModalOpen] = useState(!cardInfo.company)

  const navigate = useNavigate()

  const openModal = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (cardNumber.error) {
      return alert(ALERT_MESSAGE.CHECK_CARD_NUMBER)
    }
    if (dueMonth.error || dueYear.error) {
      return alert(ALERT_MESSAGE.CHECK_DUE_DATE)
    }
    navigate(
      `/react-payments/nickname/${Object.values(cardInfo.cardNumber).join('')}`
    )
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
          {isFormFulfilled && (
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
