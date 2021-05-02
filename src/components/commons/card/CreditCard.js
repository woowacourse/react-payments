import PropTypes from 'prop-types';
import Styled from './CreditCard.style';
import { CARD_SIZE, Card } from './Card';
import { COLOR } from '../../../constants/color';
export { CARD_SIZE } from './Card';

export const CreditCard = ({ size, backgroundColor, cardType, cardNumber, cardOwner, cardExpiredDate }) => {
  const maskNumbers = numbers => {
    if (!numbers) return;

    return [...Array(numbers.length)].map(() => '•');
  };

  return (
    <Card size={size} styles={{ margin: '0 auto', backgroundColor }}>
      <Styled.CardType size={size}>{cardType}</Styled.CardType>
      <Styled.Chip size={size} />
      <Styled.CardNumber size={size}>
        <div>{cardNumber?.[0]}</div>
        <div>{cardNumber?.[1]}</div>
        <div>{maskNumbers(cardNumber?.[2])}</div>
        <div>{maskNumbers(cardNumber?.[3])}</div>
      </Styled.CardNumber>
      <Styled.CardOwner size={size}>{cardOwner || 'NAME'}</Styled.CardOwner>
      <Styled.CardExpiredDate size={size}>
        {`${cardExpiredDate?.month || 'MM'} / ${cardExpiredDate?.year || 'YY'}`}
      </Styled.CardExpiredDate>
    </Card>
  );
};

CreditCard.propTypes = {
  size: PropTypes.oneOf(Object.values(CARD_SIZE)),
  backgroundColor: PropTypes.string,
  cardType: PropTypes.string,
  cardNumber: PropTypes.arrayOf(PropTypes.string),
  cardOwner: PropTypes.string,
  cardExpiredDate: PropTypes.object,
};

CreditCard.defaultProps = {
  size: CARD_SIZE.MD,
  backgroundColor: COLOR.LIGHT_GRAY,
  cardOwner: 'NAME',
  cardExpiredDate: 'MM / YY',
};
