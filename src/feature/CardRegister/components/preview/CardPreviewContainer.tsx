import styled from 'styled-components';

import CardBrandLogo from './CardBrandLogo';
import CardExpiryDateDisplay from './CardExpiryDateDisplay';
import CardNumberDisplay from './CardNumberDisplay';

import {CARD_COMPANIES, DEFAULT_CARD_COLOR} from '@/domain/card/cardCompany';

import type {CardCompanyType} from '@/domain/card/cardCompany';
import type {CardBrandType} from '@/domain/card/cardBrand';

type CardPreviewContainerProps = {
  cardNumbers: string[];
  brand: CardBrandType | null;
  expiryDate: string[];
  selectedCompany: CardCompanyType | null;
};

const CardPreviewContainer = ({cardNumbers, brand, expiryDate, selectedCompany}: CardPreviewContainerProps) => {
  const bgColor = selectedCompany ? CARD_COMPANIES[selectedCompany].backgroundColor : DEFAULT_CARD_COLOR;

  return (
    <Container $bgColor={bgColor}>
      <CardHeader>
        <IcChip />
        <CardBrandLogo brandName={brand} />
      </CardHeader>
      <CardBody>
        <CardNumberDisplay cardNumbers={cardNumbers} />
        <CardExpiryDateDisplay expiryDate={expiryDate} />
      </CardBody>
    </Container>
  );
};

const Container = styled.div<{$bgColor: string}>`
  display: flex;
  flex-direction: column;
  width: 212px;
  height: 132px;
  padding: 8px 10px;
  gap: 12px;
  background-color: ${({$bgColor}) => $bgColor};
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
