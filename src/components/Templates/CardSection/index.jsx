import styled from 'styled-components';
import Card from '../../Modules/Card';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

function CardSection() {
  const companyNameString = '신한카드';
  const cardNumberString = '';
  const expiredDateString = '';
  const ownerNameString = '';

  return (
    <CardContainer>
      <Card
        companyNameString={companyNameString}
        cardNumberString={cardNumberString}
        expiredDateString={expiredDateString}
        ownerNameString={ownerNameString}
      />
    </CardContainer>
  );
}

export default CardSection;
