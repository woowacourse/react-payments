import { useMemo } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useCardList from '../../hooks/useCardList';
import Card from '../@common/Card';

function CardList() {
  const navigation = useNavigate();
  const { cardList } = useCardList({ key: 'card-list' });

  const cardLists = useMemo(() => {
    return cardList.length ? (
      cardList.map((card) => {
        const { cardNumber, ownerName, expirationDate } = card;
        return (
          <Card
            key={cardNumber.join('') + expirationDate.join('')}
            cardNumber={cardNumber.join(' ')}
            ownerName={ownerName}
            expirationDate={expirationDate.join(' / ')}
          />
        );
      })
    ) : (
      <CardRegisterParagarph>새로운 카드를 등록해주세요.</CardRegisterParagarph>
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

const CardRegisterParagarph = styled.p`
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
