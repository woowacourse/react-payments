import React from 'react';
import PropTypes from 'prop-types';
import { FRAGMENT_INDEX, DATE_TYPE } from '../../../constants/constants';
import SecureEllipseImage from '../../../assets/secure-ellipse.svg';
import * as Style from './style.js';

const Card = (props) => {
  const { backgroundColor, width, height, size, cardNumbers, bankName, ownerName, expirationDate } = props;
  const { FIRST, SECOND, THIRD, FOURTH } = FRAGMENT_INDEX;
  const { MONTH, YEAR } = DATE_TYPE;

  const showSecureDigits = (length) =>
    Array.from({ length }, (_, idx) => <img key={idx} src={SecureEllipseImage} alt="secure-mark" />);

  return (
    <Style.Root width={width} height={height} size={size} backgroundColor={backgroundColor}>
      <Style.CardName>{bankName}</Style.CardName>
      <Style.Chip />
      <Style.CardNumbersWrapper>
        <Style.CardNumbersFragment>{cardNumbers[FIRST]}</Style.CardNumbersFragment>
        <Style.CardNumbersFragment>{cardNumbers[SECOND]}</Style.CardNumbersFragment>
        <Style.CardNumbersFragment>{showSecureDigits(cardNumbers[THIRD].length)}</Style.CardNumbersFragment>
        <Style.CardNumbersFragment>{showSecureDigits(cardNumbers[FOURTH].length)}</Style.CardNumbersFragment>
      </Style.CardNumbersWrapper>
      <Style.OwnerName>{`${ownerName || 'NAME'}`}</Style.OwnerName>
      <Style.ExpirationDate>{`${expirationDate[MONTH] || 'MM'}/${expirationDate[YEAR] || 'YY'}`}</Style.ExpirationDate>
    </Style.Root>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  size: PropTypes.string,
  cardNumbers: PropTypes.object.isRequired,
  bankName: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  expirationDate: PropTypes.object.isRequired,
};

Card.defaultProps = {
  size: 'normal',
};

export default Card;
