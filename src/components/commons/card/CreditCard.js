import PropTypes from 'prop-types';
import Styled from './CreditCard.style';
import { CARD_SIZE, Card } from './Card';
import { COLOR } from '../../../constants/color';
export { CARD_SIZE } from './Card';

export const CreditCard = ({ size, backgroundColor, content }) => {
  const maskNumbers = numbers => {
    if (!numbers) return;

    return [...Array(numbers.length)].map(() => '•');
  };

  return (
    <Card size={size} styles={{ margin: '0 auto', backgroundColor }}>
      <Styled.CardType size={size}>{content.cardType}</Styled.CardType>
      <Styled.Chip size={size} />
      <Styled.CardNumber size={size}>
        <div>{content.cardNumber?.[0]}</div>
        <div>{content.cardNumber?.[1]}</div>
        <div>{maskNumbers(content.cardNumber?.[2])}</div>
        <div>{maskNumbers(content.cardNumber?.[3])}</div>
      </Styled.CardNumber>
      <Styled.CardOwner size={size}>{content.cardOwner || 'NAME'}</Styled.CardOwner>
      <Styled.CardExpiredDate size={size}>
        {`${content.cardExpiredDate?.month || 'MM'} / ${content.cardExpiredDate?.year || 'YY'}`}
      </Styled.CardExpiredDate>
    </Card>
  );
};

CreditCard.propTypes = {
  size: PropTypes.oneOf(Object.values(CARD_SIZE)),
  backgroundColor: PropTypes.string,
  content: PropTypes.shape({
    cardType: PropTypes.string,
    cardNumber: PropTypes.arrayOf(PropTypes.string),
    cardOwner: PropTypes.string,
    cardExpiredDate: PropTypes.object,
  }),
};

CreditCard.defaultProps = {
  size: CARD_SIZE.MD,
  backgroundColor: COLOR.LIGHT_GRAY,
  content: {
    cardOwner: 'NAME',
    cardExpiredDate: 'MM / YY',
  },
};
