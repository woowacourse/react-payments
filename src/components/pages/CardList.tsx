import { useMemo } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useCardList from '../../hooks/useCardList';
import Card from '../@common/Card';
import { COLOR_BY_CARD_COMPANY, KOR_NAME_BY_CARD_COMPANY } from '../../@types/cardCompany';

function CardList() {
  const navigation = useNavigate();
  const { cardList } = useCardList({ key: 'card-list' });

  const cardLists = useMemo(() => {
    return cardList.length ? (
      cardList.map(({ cardNumber, ownerName, expirationDate, cardCompany }) => {
        const companyName = KOR_NAME_BY_CARD_COMPANY[cardCompany];
        const cardColor = COLOR_BY_CARD_COMPANY[cardCompany];
        return (
          <Card
            onClick={() => {}}
            key={`card-list-${ownerName}-${expirationDate}-${cardCompany}`}
            cardNumber={cardNumber}
            ownerName={ownerName}
            expirationDate={expirationDate}
            cardCompany={companyName}
            cardColor={cardColor}
          />
        );
      })
    ) : (
      <CardRegisterParagraph>새로운 카드를 등록해주세요.</CardRegisterParagraph>
    );
  }, [cardList]);

  return (
    <CardListSection>
      {cardLists}
      <AddButton
        isFirst={cardList.length ? false : true}
        onClick={() => {
          navigation('/card-register');
        }}
      >
        +
      </AddButton>
    </CardListSection>
  );
}

export default CardList;

const CardListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardRegisterParagraph = styled.p`
  margin-bottom: 9px;
`;

const AddButton = styled.button<{ isFirst: boolean }>`
  width: 208px;
  height: 123px;

  background: #e5e5e5;
  border-radius: 5px;
  border: none;

  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;

  margin: ${(props) => (props.isFirst ? '' : '25px auto')};
`;
