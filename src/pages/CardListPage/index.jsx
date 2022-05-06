import { useNavigate } from 'react-router-dom'

import Button from 'components/common/Button'
import Card from 'components/common/Card'
import Header from 'components/common/Header'

import { CardWrapper } from 'components/common/Card/style'
import { CenterItem, PageWrapper } from 'pages/style'
import {
  CardListWrapper,
  CardNickname,
  PossessedCard,
} from 'pages/CardListPage/style'

function CardListPage() {
  let navigate = useNavigate()

  return (
    <PageWrapper>
      <Header>보유카드</Header>
      <CenterItem>
        <CardListWrapper>
          <PossessedCard>
            <Card size="small" />
            <CardNickname>엄카</CardNickname>
          </PossessedCard>
          <PossessedCard>
            <Card size="small" />
            <CardNickname>엄카</CardNickname>
          </PossessedCard>
        </CardListWrapper>
        <Button
          onClick={() => {
            navigate('add')
          }}
        >
          <CardWrapper size="small">+</CardWrapper>
        </Button>
      </CenterItem>
    </PageWrapper>
  )
}

export default CardListPage
