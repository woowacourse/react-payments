import styled from 'styled-components';
import type {CardNumbersType} from '../../../../../common/types/CardInfoType';
import CardBrandLogo from '../CardBrandLogo/CardBrandLogo';
import CardExpiryDateDisplay from '../CardExpiryDateDisplay/CardExpiryDateDisplay';
import CardNumberDisplay from '../CardNumberDisplay/CardNumberDisplay';
import {getBrandName} from '../../../domain/cardPolicy';

type Props = {
  cardNumbers: CardNumbersType;
  expiryMonth: string;
  expiryYear: string;
};

const CardPreviewContainer = ({cardNumbers, expiryMonth, expiryYear}: Props) => {
  return (
    <Container>
      <CardHeader>
        <IcChip />
        <CardBrandLogo brandName={getBrandName(cardNumbers)} />
      </CardHeader>
      <CardBody>
        <CardNumberDisplay cardNumbers={cardNumbers} />
        <CardExpiryDateDisplay expiryMonth={expiryMonth} expiryYear={expiryYear} />
      </CardBody>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 212px;
  height: 132px;
  padding: 8px 10px;
  gap: 12px;
  background-color: #333333;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  height: 22px;

  width: 100%;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  padding: 6px;

  width: 100%;

  color: white;
  font-weight: 500;
  font-size: 14px;
`;

const IcChip = styled.div`
  width: 36px;

  background-color: #ddcd78;
  border-radius: 4px;
`;

export default CardPreviewContainer;
