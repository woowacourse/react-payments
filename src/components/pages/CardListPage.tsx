import { useMemo } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useCardList from '../../hooks/useCardList';
import Card from '../@common/Card';

function CardListPage() {
  const navigation = useNavigate();
  const { savedCardList } = useCardList();

  const cardLists = useMemo(() => {
    return savedCardList.length ? (
      savedCardList.map(({ cardNumber, ownerName, expirationDate, cardCompany, cardAlias }) => {
        return (
          <div key={`card-list-${ownerName}-${expirationDate}-${cardCompany}`}>
            <Card
              onClick={() => {}}
              cardNumber={cardNumber}
              ownerName={ownerName}
              expirationDate={expirationDate}
              cardCompany={cardCompany}
            />
            <CardAlias>{cardAlias}</CardAlias>
          </div>
        );
      })
    ) : (
      <CardRegisterParagraph>새로운 카드를 등록해주세요.</CardRegisterParagraph>
    );
  }, [savedCardList]);

  return (
    <CardListSection>
      {cardLists}
      <AddButton
        isFirst={savedCardList.length ? false : true}
        onClick={() => {
          navigation('/card-register');
        }}
      >
        +
      </AddButton>
    </CardListSection>
  );
}

export default CardListPage;

const CardListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardRegisterParagraph = styled.p`
  margin-bottom: 9px;
`;

const AddButton = styled.button<{ isFirst: boolean }>`
  width: 233px;
  height: 143px;

  background: #e5e5e5;
  border-radius: 5px;
  border: none;

  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;

  margin: ${(props) => (props.isFirst ? '' : '20px auto')};
`;

const CardAlias = styled.p`
  margin-top: 0px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`;
