import { Link, useNavigate } from 'react-router-dom'

import Button from 'components/common/Button'
import Card from 'components/common/Card'
import Header from 'components/common/Header'

import useLocalStorage from 'hooks/useLocalStorage'

import { ReactComponent as AddCardBtn } from 'assets/addCard.svg'

import { CenterItem, PageWrapper } from 'pages/style'
import {
  CardListWrapper,
  CardNickname,
  PossessedCard,
} from 'pages/CardListPage/style'

import { PATH } from 'constant'

function CardListPage() {
  const [cardList] = useLocalStorage('cardList')
  const navigate = useNavigate()
  const cardListArray = Object.entries(cardList)

  return (
    <PageWrapper>
      <Header>보유카드({cardListArray.length}개)</Header>
      <CenterItem>
        <CardListWrapper>
          {cardListArray.map(([key, value]) => (
            <PossessedCard key={key}>
              <Link
                to={`${PATH.NICKNAME}/${Object.values(value.cardNumber).join(
                  ''
                )}`}
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
