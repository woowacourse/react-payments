import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import Card from 'components/common/Card'
import Button from 'components/common/Button'
import Header from 'components/common/Header'

import {
  PageWrapper,
  CardWrapper,
  FooterWrapper,
  FormWrapper,
  GridContainer,
} from 'pages/style'

import { COLORS, CARD_COMPANY } from 'constant'

import CardNumberField from 'components/CardNumberField'
import DueDateField from 'components/DueDateField'
import OwnerField from 'components/OwnerField'
import CVCField from 'components/CVCField'
import PasswordField from 'components/PasswordField'

import CardInfoContext from 'store/cardInfo-context'
import Modal from 'components/common/Modal'
import CardCompany from 'components/common/CardCompany'

function AddPage() {
  const { cardInfo, isFieldFulfilled, handleCardCompany } =
    useContext(CardInfoContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <PageWrapper>
      <Header backButton>카드 추가</Header>
      <CardWrapper onClick={openModal}>
        <Card size="small" cardInfo={cardInfo} />
      </CardWrapper>
      <FormWrapper>
        <CardNumberField />
        <DueDateField />
        <OwnerField />
        <CVCField />
        <PasswordField />
        <FooterWrapper>
          {isFieldFulfilled && (
            <Button type={'submit'} color={COLORS.MINT}>
              <Link to={'/complete'}>다음</Link>
            </Button>
          )}
        </FooterWrapper>
      </FormWrapper>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <GridContainer>
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
        </GridContainer>
      </Modal>
    </PageWrapper>
  )
}

export default AddPage
