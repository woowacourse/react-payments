import Styled from './Card.style';

export const CARD_SIZE = {
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
};

export const CARD_COLOR = {
  INDIGO: '#547CE4',
  LIGHT_GRAY: '#D2D2D2',
};

export const Card = ({ size, color, content }) => {
  return (
    <Styled.Card size={size} color={color}>
      <Styled.CardType size={size}>{content.cardType}</Styled.CardType>
      <Styled.Chip size={size} />
      <Styled.CardNumber size={size}>{content.cardNumber}</Styled.CardNumber>
      <Styled.CardOwner size={size}>{content.cardOwner || 'NAME'}</Styled.CardOwner>
      <Styled.CardExpiredDate size={size}>{content.cardExpiredDate || 'MM / YY'}</Styled.CardExpiredDate>
    </Styled.Card>
  );
};

Card.defaultProps = {
  size: CARD_SIZE.MEDIUM,
  color: CARD_COLOR.LIGHT_GRAY,
  content: {
    cardOwner: 'NAME',
    cardExpiredDate: 'MM / YY',
  },
};
