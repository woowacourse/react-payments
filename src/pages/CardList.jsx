import styled from 'styled-components';

import { Card, EmptyCard, Header } from 'components';

import { useGetCardList } from 'hooks';

import getMaskedNumbers from 'utils/maskNumbers';

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
                  name={cardOwnerName || ' '}
                  number={getMaskedNumbers(cardNumber)}
                  title={cardKind.title}
                  validDate={validDate}
                />
                <Styled.CardNickname>{cardNickname}</Styled.CardNickname>
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

  CardNickname: styled.p`
    font-size: 14px;
    height: 14px;
  `,
};

export default CardList;
