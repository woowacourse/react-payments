import styled from 'styled-components';
import type { CardPreviewInfoType } from '../../../../domain/card/types/card';
import CardBrandLogo from './CardBrandLogo';
import CardExpiryDateDisplay from './CardExpiryDateDisplay';
import CardNumberDisplay from './CardNumberDisplay';
import {
  getCardBrandName,
  getCardCompanyColor,
} from '../../../../domain/card/utils/cardDisplay';

const CardPreviewContainer = ({
  cardPreviewInfo,
}: {
  cardPreviewInfo: CardPreviewInfoType;
}) => {
  const { cardNumbers, expiryMonth, expiryYear, cardCompanyId } =
    cardPreviewInfo;

  const cardBackgroundColor = getCardCompanyColor(cardCompanyId);
  const cardBrandName = getCardBrandName(cardNumbers);

  return (
    <Container $backgroundColor={cardBackgroundColor}>
      <CardHeader>
        <IcChip />
        <CardBrandLogo brandName={cardBrandName} />
      </CardHeader>
      <CardBody>
        <CardNumberDisplay cardNumbers={cardNumbers} />
        <CardExpiryDateDisplay
          expiryMonth={expiryMonth}
          expiryYear={expiryYear}
        />
      </CardBody>
    </Container>
  );
};

const Container = styled.div<{ $backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  width: 212px;
  height: 132px;
  padding: 8px 10px;
  gap: 12px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
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
