import styled from 'styled-components';

import { Card, EmptyCard, Header } from 'components';

import { useGetCardList } from 'hooks';

function CardList() {
  const cardList = useGetCardList();

  return (
    <>
      <Header title="보유 카드" />
      <Styled.CardList>
        {cardList &&
          cardList.map(
            (
              {
                attributes: {
                  cardNumber,
                  cardKind,
                  cardNickname,
                  cardOwnerName,
                  validDate,
                },
              },
              index
            ) => (
              <Styled.NicknamedCardContainer key={index}>
                <Card
                  bgColor={cardKind.color}
                  name={cardOwnerName}
                  number={cardNumber}
                  title={cardKind.title}
                  validDate={validDate}
                />
                <p>{cardNickname || '카드'}</p>
              </Styled.NicknamedCardContainer>
            )
          )}
        <EmptyCard />
      </Styled.CardList>
    </>
  );
}

const Styled = {
  CardList: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 26px;
  `,

  NicknamedCardContainer: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  `,
};

export default CardList;
