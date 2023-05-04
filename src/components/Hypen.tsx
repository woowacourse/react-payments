import styled from 'styled-components';
import { Card, CardNumber, Expiration } from 'types/Card';

const Hyphen = ({
  cardNumber,
  date,
}: Partial<Pick<Card, 'cardNumber' | 'date'>>) => {
  return <StyledHyphen cardNumber={cardNumber} date={date}></StyledHyphen>;
};

export const StyledHyphen = styled.p<{
  cardNumber?: CardNumber;
  date?: Expiration;
}>`
  font-weight: 900;
  align-self: center;
  &::after {
    content: '${(props) => (props.cardNumber ? '-' : '/')}';
  }
`;

export default Hyphen;
