import styled from 'styled-components';

import Card from 'components/common/Card';
import Header from 'components/common/Header';
import EmptyCard from 'components/EmptyCard';

// TODO: context api로 교체
const cardList = Array.from({ length: 2 }, () => {
  return { cardNickname: '공원카드' };
});

function CardList() {
  return (
    <>
      <Header title="보유 카드" />
      <Styled.CardList>
        {cardList.map(({ cardNickname }, index) => (
          <Styled.NicknamedCardContainer key={index}>
            <Card
            // bgColor={cardKind.color}
            // name={cardOwnerName}
            // number={encryptedCardNumber}
            // title={cardKind.title}
            // validDate={validDate}
            />
            <p>{cardNickname || '카드'}</p>
          </Styled.NicknamedCardContainer>
        ))}
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
