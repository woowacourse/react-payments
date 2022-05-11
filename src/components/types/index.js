import PropTypes from 'prop-types';
import { CARD_TYPE } from '../../utils/constants';

export const CARD_NUMBER_TYPE = PropTypes.shape({
  first: PropTypes.string,
  second: PropTypes.string,
  third: PropTypes.string,
  forth: PropTypes.string,
});

export const EXPIRATION_DATE_TYPE = PropTypes.shape({
  month: PropTypes.string,
  year: PropTypes.string,
});

export const PASSWORD_TYPE = PropTypes.shape({
  first: PropTypes.string,
  second: PropTypes.string,
});

export const CARD_DEFINITION = PropTypes.shape({
  id: PropTypes.string,
  cardNumber: CARD_NUMBER_TYPE,
  expirationDate: EXPIRATION_DATE_TYPE,
  ownerName: PropTypes.string,
  securityCode: PropTypes.string,
  password: PASSWORD_TYPE,
  cardType: PropTypes.oneOf(Object.keys(CARD_TYPE)),
  alias: PropTypes.string,
});
