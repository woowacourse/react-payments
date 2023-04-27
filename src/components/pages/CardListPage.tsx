import { useMemo } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useCardList from '../../hooks/useCardList';
import Card from '../@common/Card';
import { COLOR_BY_CARD_COMPANY, KOR_NAME_BY_CARD_COMPANY } from '../../@types/cardCompany';

function CardListPage() {
  const navigation = useNavigate();
  const { savedCardList } = useCardList();

  const cardLists = useMemo(() => {
    return savedCardList.length ? (
      savedCardList.map(({ cardNumber, ownerName, expirationDate, cardCompany, cardAlias }) => {
        const companyName = KOR_NAME_BY_CARD_COMPANY[cardCompany];
        const cardColor = COLOR_BY_CARD_COMPANY[cardCompany];
        return (
          <div key={`card-list-${ownerName}-${expirationDate}-${cardCompany}`}>
            <Card
              onClick={() => {}}
              cardNumber={cardNumber}
              ownerName={ownerName}
              expirationDate={expirationDate}
              cardCompany={companyName}
              cardColor={cardColor}
            />
            <p>{cardAlias}</p>
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
