import PropTypes from 'prop-types';
import Styled from './CreditCard.style';
import { CARD_SIZE, Card } from './Card';
import { COLOR } from '../../../constants/color';
import { INPUT_NAME } from '../../../constants/input';
export { CARD_SIZE } from './Card';

const { FIRST, SECOND, THIRD, FOURTH, MONTH, YEAR } = INPUT_NAME;

export const CreditCard = ({ size, backgroundColor, content }) => {
  const maskNumbers = numbers => {
    if (!numbers) return;

    return [...Array(numbers.length)].map(() => '•').join('');
  };

  return (
    <Card size={size} styles={{ margin: '0 auto', backgroundColor }}>
      <Styled.CardType size={size}>{content.cardType}</Styled.CardType>
      <Styled.Chip size={size} />
      <Styled.CardNumber size={size}>
        <div>{content.cardNumber?.[FIRST]}</div>
        <div>{content.cardNumber?.[SECOND]}</div>
        <div>{maskNumbers(content.cardNumber?.[THIRD])}</div>
        <div>{maskNumbers(content.cardNumber?.[FOURTH])}</div>
      </Styled.CardNumber>
      <Styled.CardOwner size={size}>{content.cardOwner || 'NAME'}</Styled.CardOwner>
      <Styled.CardExpiredDate size={size}>
        {`${content.cardExpiredDate?.[MONTH] || 'MM'} / ${content.cardExpiredDate?.[YEAR] || 'YY'}`}
      </Styled.CardExpiredDate>
    </Card>
  );
};

CreditCard.defaultProps = {
  size: CARD_SIZE.MD,
  backgroundColor: COLOR.GRAY_100,
  content: {
    cardType: '',
    cardNumber: {
      [FIRST]: '',
      [SECOND]: '',
      [THIRD]: '',
      [FOURTH]: '',
    },
    cardOwner: 'NAME',
    cardExpiredDate: {
      [MONTH]: 'MM',
      [YEAR]: 'YY',
    },
  },
};

CreditCard.propTypes = {
  size: PropTypes.oneOf(Object.values(CARD_SIZE)).isRequired,
  backgroundColor: PropTypes.string.isRequired,
  content: PropTypes.shape({
    cardType: PropTypes.string.isRequired,
    cardNumber: PropTypes.object.isRequired,
    cardOwner: PropTypes.string.isRequired,
    cardExpiredDate: PropTypes.object.isRequired,
  }),
};
