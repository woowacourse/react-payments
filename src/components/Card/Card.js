// <Card companyInfo={color, name}, cardNumbers, ownerName, expiryDate/>
import PropTypes from 'prop-types';
import Styled from './Card.styles';

const Card = ({ bgColor, companyName, cardNumbers, ownerName, expiryDate }) => (
  <Styled.Container bgColor={bgColor}>
    <Styled.CompanyName>{companyName}</Styled.CompanyName>

    <Styled.Chip />

    <Styled.CardNumbersGroup>
      {cardNumbers.split('-').map((number, index) => {
        const key = `${index}-${number}`;

        return <Styled.CardNumbers key={key}>{number}</Styled.CardNumbers>;
      })}
    </Styled.CardNumbersGroup>

    <Styled.OwnerName>{ownerName}</Styled.OwnerName>
    <Styled.ExpiryDate>{expiryDate}</Styled.ExpiryDate>
  </Styled.Container>
);

Card.propTypes = {
  bgColor: PropTypes.string,
  companyName: PropTypes.string,
  cardNumbers: PropTypes.string,
  ownerName: PropTypes.string,
  expiryDate: PropTypes.string,
};

Card.defaultProps = {
  bgColor: '#d2d2d2',
  companyName: '',
  cardNumbers: '',
  ownerName: 'NAME',
  expiryDate: 'MM / YY',
};

export default Card;
