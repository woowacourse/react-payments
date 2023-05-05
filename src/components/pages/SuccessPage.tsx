import { useContext, useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useCardList from '../../hooks/useCardList';
import Card from '../@common/card/Card';

import { CreditCardContext } from '../../contexts/CreditCardContext';
import Input from '../@common/input/Input';
import CreditCardContextType from '../../@types/creditCardContextType';

function SuccessPage() {
  const navigation = useNavigate();
  const { saveCard } = useCardList();
  const { creditCard, setCreditCard, initCreditCard } = useContext(
    CreditCardContext
  ) as CreditCardContextType;
  const { cardNumber, cardCompany, ownerName, expirationDate } = creditCard;

  const [isValid, setIsValid] = useState(true);

  return (
    <CardListSection>
      <CardInputContainer>
        <StyledMessage>카드등록이 완료되었습니다.</StyledMessage>

        <Card
          ownerName={ownerName}
          cardCompany={cardCompany}
          expirationDate={expirationDate}
          cardNumber={cardNumber}
        ></Card>
        <div>
          <Input
            onChange={(event) => {
              const alias = event.currentTarget.value;

              if (!setCreditCard) return;
              setCreditCard('cardAlias', alias);
            }}
            placeholder="카드 별칭을 입력해주세요."
          ></Input>
          {!isValid && (
            <StyleErrorMessage>{'1글자 이상 10글자 이하로 입력해주세요.'}</StyleErrorMessage>
          )}
        </div>
      </CardInputContainer>

      <StyleButton
        onClick={() => {
          if (creditCard.cardAlias.length < 1 || creditCard.cardAlias.length > 10) {
            setIsValid(false);
            return;
          }

          saveCard({ ...creditCard }, () => {
            navigation('/', { replace: true });
          });
          initCreditCard();
        }}
      >
        확인
      </StyleButton>
    </CardListSection>
  );
}

export default SuccessPage;

const CardListSection = styled.section`
  margin: auto;
  height: 648px;
  align-items: center;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledMessage = styled.p`
  padding-top: 100px;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 36px;
`;

const StyleErrorMessage = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: red;
  text-align: center;
`;

const StyleButton = styled.button`
  width: 51px;

  background: none;
  border: none;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  margin: 0 0 0 auto;
  &:hover {
    cursor: pointer;
  }
`;

const CardInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  position: relative;
  right: 0;
`;
