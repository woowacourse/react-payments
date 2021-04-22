import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './style.js';
import SecureEllipseImage from '../../../assets/secure-ellipse.svg';

const Card = ({ backgroundColor, width, height, bank, owner, numbers, expirationDate }) => {
  const [first, second] = numbers;

  const secureDigits = Array.from({ length: 4 }, (_, idx) => (
    <img key={idx} src={SecureEllipseImage} alt="secure-mark" />
  ));

  return (
    <Style.Root width={width} height={height} backgroundColor={backgroundColor}>
      <Style.CardName>{bank || '포코카드'}</Style.CardName>
      <Style.Chip />
      <Style.CardNumbersWrapper>
        <Style.CardNumberGroup>{first}</Style.CardNumberGroup>
        <Style.CardNumberGroup>{second}</Style.CardNumberGroup>
        <Style.CardNumberGroup>{secureDigits}</Style.CardNumberGroup>
        <Style.CardNumberGroup>{secureDigits}</Style.CardNumberGroup>
      </Style.CardNumbersWrapper>
      <Style.OwnerName>{owner}</Style.OwnerName>
      <Style.ExpirationDate>{expirationDate}</Style.ExpirationDate>
    </Style.Root>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  bank: PropTypes.string,
  owner: PropTypes.string,
  numbers: PropTypes.arrayOf(PropTypes.string).isRequired,
  expirationDate: PropTypes.string.isRequired,
};

export default Card;
