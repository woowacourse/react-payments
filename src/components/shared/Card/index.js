import React from 'react';
import PropTypes from 'prop-types';
import SecureEllipseImage from '../../../assets/secure-ellipse.svg';
import * as Style from './style.js';

const Card = (props) => {
  const { backgroundColor, width, height, bankName, ownerName, cardNumbers, expirationDate } = props;

  const secureDigits = Array.from({ length: 4 }, (_, idx) => (
    <img key={idx} src={SecureEllipseImage} alt="secure-mark" />
  ));

  return (
    <Style.Root width={width} height={height} backgroundColor={backgroundColor}>
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
  bank: PropTypes.string,
  ownerName: PropTypes.string,
  cardNumbers: PropTypes.object,
  expirationDate: PropTypes.object,
};

export default Card;
