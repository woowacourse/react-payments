import { useState } from 'react';
import styled from 'styled-components';

import CardPreview from '../components/CardPreview';
import CardInfoForm from '../components/CardInfoForm';

import useCardInfo from '../hooks/useCardInfo';

const CardRegisterPage = () => {
  const { control, completionStatus } = useCardInfo();
  const [isCardFront, setIsCardFront] = useState(true);

  const { cardNumbers, cardType, expiryDate, cardholderName, cvc } = control;

  return (
    <S.PageContainer>
      <CardPreview
        isFront={isCardFront}
        cardType={cardType.value}
        cardNumbers={cardNumbers.value}
        expiryDate={{ month: expiryDate.month.value, year: expiryDate.year.value }}
        cardholderName={cardholderName.value}
        cvc={cvc.value}
      />
      <S.CardInfoFormWrapper>
        <CardInfoForm cardInfoControl={control} completionStatus={completionStatus} setIsCardFront={setIsCardFront} />
      </S.CardInfoFormWrapper>
    </S.PageContainer>
  );
};

const S = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
  `,

  CardInfoFormWrapper: styled.section`
    margin-top: 50px;
    margin-bottom: 70px;
  `,
};

export default CardRegisterPage;
