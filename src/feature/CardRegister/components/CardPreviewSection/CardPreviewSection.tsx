import styled from 'styled-components';
import CardPreviewContainer from './CardPreviewContainer/CardPreviewContainer';
import type {CardCompanyType} from '../../domain/cardCompany';

type Props = {
  cardNumbers: string[];
  expiryMonth: string;
  expiryYear: string;
  selectedCompany: CardCompanyType | null;
};

const CardPreviewSection = ({cardNumbers, expiryMonth, expiryYear, selectedCompany}: Props) => {
  return (
    <Container>
      <CardPreviewContainer
        cardNumbers={cardNumbers}
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
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
