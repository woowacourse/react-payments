import styled from 'styled-components';
import type {CardNumbersType} from '../../../../common/types/CardInfoType';
import CardPreviewContainer from './CardPreviewContainer/CardPreviewContainer';

type Props = {
  cardNumbers: CardNumbersType;
  expiryMonth: string;
  expiryYear: string;
};

const CardPreviewSection = ({cardNumbers, expiryMonth, expiryYear}: Props) => {
  return (
    <Container>
      <CardPreviewContainer cardNumbers={cardNumbers} expiryMonth={expiryMonth} expiryYear={expiryYear} />
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
