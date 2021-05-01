import PropTypes from 'prop-types';
import Styled from './Card.styles';
import REGEX from '../../constants/regex';

const Card = ({
  bgColor,
  companyName,
  cardNumbers,
  ownerName,
  expiryDate,
  size,
  onClick,
  ...props
}) => {
  const formattedCardNumber =
    (() => {
      const cardNumberChunks = cardNumbers.match(REGEX.TEXT_WITH_LENGTH(4)) || [];

      return cardNumberChunks.map((chunk, index) => {
        if (index <= 1) return chunk;

        return chunk.replace(REGEX.NUMBER, '•');
      });
    },
    [cardNumbers]);

  return (
    <Styled.Container bgColor={bgColor} size={size} onClick={onClick} {...props} data-is-card>
      <Styled.CompanyName>{companyName}</Styled.CompanyName>

      <Styled.Chip />

      <Styled.CardNumbersGroup>
        {formattedCardNumber.map((number, index) => {
          const key = `${index}-${number}`;

          return <Styled.CardNumbers key={key}>{number}</Styled.CardNumbers>;
        })}
      </Styled.CardNumbersGroup>

      <Styled.OwnerName>{ownerName}</Styled.OwnerName>
      <Styled.ExpiryDate>{expiryDate}</Styled.ExpiryDate>
    </Styled.Container>
  );
};
Card.propTypes = {
  bgColor: PropTypes.string,
  companyName: PropTypes.string,
  cardNumbers: PropTypes.string,
  ownerName: PropTypes.string,
  expiryDate: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
};

Card.defaultProps = {
  bgColor: '#d2d2d2',
  companyName: '',
  cardNumbers: '',
  ownerName: 'NAME',
  expiryDate: 'MM / YY',
  size: 'medium',

  onClick: () => {},
};

export default Card;
