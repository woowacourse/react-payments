import { useContext } from 'react';
import styled from 'styled-components';
import Card from '../../Modules/Card';
import { CardNumberContext } from '../../../context/CardNumberContext';
import { ExpiredDateContext } from '../../../context/ExpiredDateContext';
import { CardOwnerContext } from '../../../context/CardOwnerContext';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

function CardSection() {
  const companyNameString = '신한카드';
  const { cardNumberString } = useContext(CardNumberContext);
  const { expiredDateString } = useContext(ExpiredDateContext);
  const { ownerNameString } = useContext(CardOwnerContext);

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
