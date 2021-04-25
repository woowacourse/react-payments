import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './style.js';
import SecureEllipseImage from '../../../assets/secure-ellipse.svg';

const Card = ({ isFilled, backgroundColor, width, height, bank, owner, numbers, expirationDate }) => {
  const [first, second] = numbers || [];

  const secureDigits = Array.from({ length: 4 }, (_, idx) => (
    <img key={idx} src={SecureEllipseImage} alt="secure-mark" />
  ));

  return (
    <Style.Root width={width} height={height} backgroundColor={backgroundColor}>
      {/* TODO: 조건부 렌더링 리팩토링 */}
      {isFilled && <Style.CardName>{bank}</Style.CardName>}
      <Style.Chip />
      {isFilled && (
        <Style.CardNumbersWrapper>
          <Style.CardNumberGroup>{first}</Style.CardNumberGroup>
          <Style.CardNumberGroup>{second}</Style.CardNumberGroup>
          <Style.CardNumberGroup>{secureDigits}</Style.CardNumberGroup>
          <Style.CardNumberGroup>{secureDigits}</Style.CardNumberGroup>
        </Style.CardNumbersWrapper>
      )}
      <Style.OwnerName>{isFilled ? owner : 'NAME'}</Style.OwnerName>
      <Style.ExpirationDate>{isFilled ? expirationDate : 'MM/YY'}</Style.ExpirationDate>
    </Style.Root>
  );
};

Card.propTypes = {
  isFilled: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  bank: PropTypes.string,
  owner: PropTypes.string,
  numbers: PropTypes.arrayOf(PropTypes.string),
  expirationDate: PropTypes.string,
};

export default Card;
