import React from 'react';
import PropTypes from 'prop-types';
import SecureEllipseImage from '../../../assets/secure-ellipse.svg';
import * as Style from './style.js';

const Card = (props) => {
  const { backgroundColor, width, height, size, bankName, ownerName, cardNumbers, expirationDate } = props;

  const secureDigits = Array.from({ length: 4 }, (_, idx) => (
    <img key={idx} src={SecureEllipseImage} alt="secure-mark" />
  ));

  return (
    <Style.Root width={width} height={height} size={size} backgroundColor={backgroundColor}>
      {<Style.CardName>{bankName}</Style.CardName>}
      <Style.Chip />
      <Style.CardNumbersWrapper>
        <Style.CardNumbersFragment>{cardNumbers[1]}</Style.CardNumbersFragment>
        <Style.CardNumbersFragment>{cardNumbers[2]}</Style.CardNumbersFragment>
        <Style.CardNumbersFragment>{cardNumbers[3] && secureDigits}</Style.CardNumbersFragment>
        <Style.CardNumbersFragment>{cardNumbers[4] && secureDigits}</Style.CardNumbersFragment>
      </Style.CardNumbersWrapper>
      <Style.OwnerName>{`${ownerName || 'NAME'}`}</Style.OwnerName>
      <Style.ExpirationDate>
        {`${expirationDate['month'] || 'MM'}/${expirationDate['year'] || 'YY'}`}
      </Style.ExpirationDate>
    </Style.Root>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  size: PropTypes.string,
  bank: PropTypes.string,
  ownerName: PropTypes.string,
  cardNumbers: PropTypes.object,
  expirationDate: PropTypes.object,
};

Card.defaultProps = {
  size: 'normal',
};

export default Card;
