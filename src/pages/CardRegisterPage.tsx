import styled from 'styled-components';

import CardPreview from '../components/CardPreview';
import CardInfoForm from '../components/CardInfoForm/CardInfoForm';
import useCardInfo from '../hooks/useCardInfo/useCardInfo';

const CardRegisterPage = () => {
  const { control, completionStatus } = useCardInfo();
  const { cardNumbers, expiryDate, cardholderName, cvc } = control;

  return (
    <Container>
      <CardPreview
        cardNumbers={cardNumbers.value}
        expiryDate={{ month: expiryDate.month.value, year: expiryDate.year.value }}
        cardholderName={cardholderName.value}
      />
      <CardInfoFormWrapper>
        <CardInfoForm cardInfoControl={control} completionStatus={completionStatus} />
      </CardInfoFormWrapper>
    </Container>
  );
};

const Container = styled.div`
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
