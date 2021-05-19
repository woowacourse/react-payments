import React from 'react';
import PropTypes from 'prop-types';
import { FRAGMENT_INDEX, DATE_TYPE } from '../../../constants/constants';
import { dummyBanks } from '../../../mockData.js';
import PALETTE from '../../../styles/palette';
import SecureEllipseImage from '../../../assets/secure-ellipse.svg';
import * as Style from './style.js';

const Card = (props) => {
  const { width, height, size, bankId, cardNumbers, ownerName, expirationDate } = props;
  const { FIRST, SECOND, THIRD, FOURTH } = FRAGMENT_INDEX;
  const { MONTH, YEAR } = DATE_TYPE;

  const showSecureDigits = (length) =>
    Array.from({ length }, (_, idx) => <img key={idx} src={SecureEllipseImage} alt="secure-mark" />);

  const bank = dummyBanks.find(({ id }) => id === bankId);
  const bankName = bank?.name || '';
  const cardColor = bank?.color || PALETTE.EMPTY_CARD_GRAY;

  return (
    <Style.Root width={width} height={height} size={size} backgroundColor={cardColor}>
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
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  size: PropTypes.string,
  cardNumbers: PropTypes.object.isRequired,
  bankId: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  expirationDate: PropTypes.object.isRequired,
};

Card.defaultProps = {
  size: 'normal',
};

export default Card;
