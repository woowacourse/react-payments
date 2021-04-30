import { Link } from 'react-router-dom';
import Styled from './CardList.styles';
import { Card, CardAddButton, Header } from '../../components';
import { ROUTE, LOCAL_STORAGE_KEY } from '../../constants';
import { useLocalStorage } from '../../hooks';
import { ScreenContainer } from '../../styles/common.styles';

const CardList = () => {
  const cardList = useLocalStorage(LOCAL_STORAGE_KEY.CARD_LIST);

  const sortedCardList = [...cardList.value].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <ScreenContainer>
      <Header text="보유카드" />
      <Styled.Container>
        <Styled.CardList>
          <Styled.CardItem noCardName>
            <Link to={ROUTE.ADD}>
              <CardAddButton />
            </Link>
          </Styled.CardItem>
          {sortedCardList?.map((card) => {
            const {
              id,
              cardNumbers,
              cardCompanyName,
              cardCompanyColor,
              ownerName,
              expiryDate,
              nickname,
            } = card;

            return (
              <Styled.CardItem key={id}>
                <Card
                  bgColor={cardCompanyColor}
                  companyName={cardCompanyName}
                  cardNumbers={cardNumbers}
                  ownerName={ownerName}
                  expiryDate={expiryDate}
                />
                <Styled.CardNickName>{nickname}</Styled.CardNickName>
              </Styled.CardItem>
            );
          })}
        </Styled.CardList>
      </Styled.Container>
    </ScreenContainer>
  );
};

export default CardList;
