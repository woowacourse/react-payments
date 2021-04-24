import Styled from './CreditCard.style';
import { CARD_SIZE, Card } from './Card';
import { COLOR } from '../../../constants/color';
export { CARD_SIZE } from './Card';

export const CreditCard = ({ size, backgroundColor, content }) => {
  return (
    <Card size={size} backgroundColor={backgroundColor} styles={{ margin: '0 auto' }}>
      <Styled.CardType size={size}>{content.cardType}</Styled.CardType>
      <Styled.Chip size={size} />
      <Styled.CardNumber size={size}>{content.cardNumber}</Styled.CardNumber>
      <Styled.CardOwner size={size}>{content.cardOwner || 'NAME'}</Styled.CardOwner>
      <Styled.CardExpiredDate size={size}>{content.cardExpiredDate || 'MM / YY'}</Styled.CardExpiredDate>
    </Card>
  );
};

CreditCard.defaultProps = {
  size: CARD_SIZE.MD,
  backgroundColor: COLOR.MINT,
  content: {
    cardOwner: 'NAME',
    cardExpiredDate: 'MM / YY',
  },
};
