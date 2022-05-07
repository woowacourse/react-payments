import { useNavigate } from 'react-router-dom';
import Head from 'components/Head';
import Card from 'components/Card';
import {
  Container,
  HeadTitle,
  CardListSection,
  CardInfoWrapper,
  CardAlias,
  CardAddButton,
} from './style';
import { useCardListContext } from 'context/cardList';

function CardListPage() {
  const navigate = useNavigate();
  const { cardList } = useCardListContext();

  const handleClickCardAddButton = () => {
    navigate('/cardAdd');
  };

  return (
    <Container>
      <Head leftComponent={<HeadTitle>보유 카드</HeadTitle>} />
      <CardListSection>
        {cardList.map(cardInfo => (
          <CardInfoWrapper key={cardInfo.id}>
            <Card {...cardInfo} />
            <CardAlias isNoneAlias={cardInfo.alias === ''}>
              {!cardInfo.alias ? '별칭 없음' : cardInfo.alias}
            </CardAlias>
          </CardInfoWrapper>
        ))}
        <CardAddButton onClick={handleClickCardAddButton}>+</CardAddButton>
      </CardListSection>
    </Container>
  );
}

export default CardListPage;
