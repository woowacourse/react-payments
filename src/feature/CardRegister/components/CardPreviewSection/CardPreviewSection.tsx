import styled from 'styled-components';
import CardPreviewContainer from './CardPreviewContainer/CardPreviewContainer';
import type {CardCompanyType} from '../../domain/cardCompany';
import type {CardBrandType} from '../../domain/cardBrand';

type Props = {
  cardNumbers: string[];
  brand: CardBrandType | null;
  expiryDate: string[];
  selectedCompany: CardCompanyType | null;
};

const CardPreviewSection = ({cardNumbers, brand, expiryDate, selectedCompany}: Props) => {
  return (
    <Container>
      <CardPreviewContainer
        cardNumbers={cardNumbers}
        brand={brand}
        expiryDate={expiryDate}
        selectedCompany={selectedCompany}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0 25px 0;
`;

export default CardPreviewSection;
