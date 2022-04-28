import PropTypes from 'prop-types';

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
