import styled from 'styled-components';

import CardPreview from '../components/CardPreview';
import CardInfoForm from '../components/CardInfoForm';
import useCardInfo from '../hooks/useCardInfo/useCardInfo';
import { useState } from 'react';

const CardRegisterPage = () => {
  const { control, completionStatus } = useCardInfo();
  const [isCardFront, setIsCardFront] = useState(true);

  const { cardNumbers, expiryDate, cardholderName, cvc } = control;

  return (
    <PageContainer>
      <CardPreview
        isFront={isCardFront}
        cardType={0}
        cardNumbers={cardNumbers.value}
        expiryDate={{ month: expiryDate.month.value, year: expiryDate.year.value }}
        cardholderName={cardholderName.value}
        cvc={cvc.value}
      />
      <CardInfoFormWrapper>
        <CardInfoForm cardInfoControl={control} completionStatus={completionStatus} setIsCardFront={setIsCardFront} />
      </CardInfoFormWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const CardInfoFormWrapper = styled.section`
  margin-top: 50px;
  margin-bottom: 70px;
`;

export default CardRegisterPage;
