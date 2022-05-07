import { Link, useNavigate } from 'react-router-dom'

import Button from 'components/common/Button'
import Card from 'components/common/Card'
import Header from 'components/common/Header'

import { ReactComponent as AddCardBtn } from 'assets/addCard.svg'

import { CenterItem, PageWrapper } from 'pages/style'
import {
  CardListWrapper,
  CardNickname,
  PossessedCard,
} from 'pages/CardListPage/style'

function CardListPage() {
  const navigate = useNavigate()
  const cardList = localStorage.getItem('cardList')
    ? Object.entries(JSON.parse(localStorage.getItem('cardList')))
    : []

  return (
    <PageWrapper>
      <Header>보유카드({cardList.length}개)</Header>
      <CenterItem>
        <CardListWrapper>
          {cardList.map(([key, value]) => (
            <PossessedCard key={key}>
              <Link
                to={`/react-payments/nickname/${Object.values(
                  value.cardNumber
                ).join('')}`}
              >
                <Card size="small" cardInfo={value} />
              </Link>
              <CardNickname>{value.cardNickName}</CardNickname>
            </PossessedCard>
          ))}
        </CardListWrapper>
        <Button
          onClick={() => {
            navigate('add')
          }}
        >
          <AddCardBtn />
        </Button>
      </CenterItem>
    </PageWrapper>
  )
}

export default CardListPage
