import { useContext } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useCardList from '../../hooks/useCardList';
import Card from '../@common/Card';
import { COLOR_BY_CARD_COMPANY, KOR_NAME_BY_CARD_COMPANY } from '../../@types/cardCompany';
import { CreditCardContext } from '../../contexts/CreditCardContext';
import Input from '../@common/Input';

function SuccessPage() {
  const navigation = useNavigate();
  const { saveCard } = useCardList({ key: 'card-list' });
  const { creditCard, setCreditCard, initCreditCard } = useContext(CreditCardContext);
  const { cardNumber, cardCompany, ownerName, expirationDate } = creditCard;

  return (
    <CardListSection>
      <p>카드등록이 완료되었습니다.</p>
      <Card
        cardColor={COLOR_BY_CARD_COMPANY[cardCompany]}
        ownerName={ownerName}
        cardCompany={KOR_NAME_BY_CARD_COMPANY[cardCompany]}
        expirationDate={expirationDate}
        cardNumber={cardNumber}
      ></Card>
      <Input
        onChange={(event) => {
          const alias = event.currentTarget.value as string;

          if (!setCreditCard) return;
          setCreditCard('cardAlias', alias);
        }}
      ></Input>
      <button
        onClick={() => {
          saveCard({ ...creditCard });
          initCreditCard();
          navigation('/');
        }}
      >
        확인
      </button>
    </CardListSection>
  );
}

export default SuccessPage;

const CardListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
