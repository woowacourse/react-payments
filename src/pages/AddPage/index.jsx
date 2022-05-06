import { useContext } from 'react'
import { Link } from 'react-router-dom'

import Card from 'components/common/Card'
import Button from 'components/common/Button'
import Header from 'components/common/Header'

import {
  PageWrapper,
  CardWrapper,
  FooterWrapper,
  FormWrapper,
} from 'pages/style'

import { COLORS } from 'constant'

import CardNumberField from 'components/CardNumberField'
import DueDateField from 'components/DueDateField'
import OwnerField from 'components/OwnerField'
import CVCField from 'components/CVCField'
import PasswordField from 'components/PasswordField'

import CardInfoContext from 'store/cardInfo-context'

function AddPage() {
  const { cardInfo, isFieldFulfilled } = useContext(CardInfoContext)

  return (
    <PageWrapper>
      <Header backButton>카드 추가</Header>
      <CardWrapper>
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
    </PageWrapper>
  )
}

export default AddPage
