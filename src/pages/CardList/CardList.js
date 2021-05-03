import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Styled from './CardList.styles';
import { Card, CardAddButton, Header, Spinner, ErrorPage } from '../../components';
import { API, MESSAGE, ROUTE } from '../../constants';
import { ScreenContainer } from '../../styles/common.styles';
import { useFetch } from '../../hooks';

const CardList = () => {
  const [cardList, fetchCardList] = useFetch(API.BASE_URL);
  const sortedCardList = [...(cardList.data || [])].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );

  useEffect(() => {
    fetchCardList();
  }, [fetchCardList]);

  return (
    <ScreenContainer>
      <Header text="보유카드" />
      <Styled.Container>
        {cardList.status === API.STATUS.PENDING && (
          <Styled.Spinner>
            <Spinner />
          </Styled.Spinner>
        )}
        {cardList.status === API.STATUS.SUCCESS && cardList.data && (
          <Styled.CardList>
            <Styled.CardItem noCardName>
              <Link to={ROUTE.ADD}>
                <CardAddButton />
              </Link>
            </Styled.CardItem>
            {sortedCardList?.map?.((card) => {
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
        )}
        {cardList.status === API.STATUS.FAILURE && (
          <ErrorPage message={MESSAGE.ERROR_PAGE_CARD_LIST} />
        )}
      </Styled.Container>
    </ScreenContainer>
  );
};

export default CardList;
