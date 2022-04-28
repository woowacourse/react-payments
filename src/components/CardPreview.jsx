import PropTypes from 'prop-types';
import { CRYPTO_STRING, DEFAULT_CARD_INFO } from '../constants';

const propTypes = {
  company: PropTypes.string,
  number: PropTypes.object,
  ownerName: PropTypes.string,
  expiryDate: PropTypes.shape({
    month: PropTypes.string,
    year: PropTypes.string,
  }),
};

const CardPreview = ({ company, number, ownerName, expiryDate, theme, handleModal }) => {
  const { first, second, third, fourth } = number;
  const { month, year } = expiryDate;

  return (
    <div className="card-box">
      <div className="empty-card" onClick={handleModal} style={{ backgroundColor: theme }}>
        <div className="card-top">
          <span className="card-text">{company}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text card-text__default">{first}</span>
            <span className="card-text card-text__default">{second}</span>
            <span className="card-text card-text__default card-text__privacy">
              {CRYPTO_STRING.repeat(third.length)}
            </span>
            <span className="card-text card-text__default card-text__privacy">
              {CRYPTO_STRING.repeat(fourth.length)}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">
              {ownerName.toUpperCase() || DEFAULT_CARD_INFO.OWNER_NAME}
            </span>
            <span className="card-text">
              {month || DEFAULT_CARD_INFO.EXPIRY_MONTH} / {year || DEFAULT_CARD_INFO.EXPIRY_YEAR}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

CardPreview.propTypes = propTypes;

export default CardPreview;
