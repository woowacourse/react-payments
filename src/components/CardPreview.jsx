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

const CardPreview = ({ theme, company, number, expiryDate, ownerName, handleModal }) => {
  const { first, second, third, fourth } = number;
  const upperCaseOwnerName = ownerName.toUpperCase() || DEFAULT_CARD_INFO.OWNER_NAME;
  const month = expiryDate.month || DEFAULT_CARD_INFO.EXPIRY_MONTH;
  const year = expiryDate.year || DEFAULT_CARD_INFO.EXPIRY_YEAR;

  return (
    <div className="card-box">
      <div className={`empty-card bg-${theme}`} onClick={handleModal}>
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
            <span className="card-text card-text__control">{upperCaseOwnerName}</span>
            <span className="card-text">
              {month} / {year}
            </span>
          </div>
        </div>
        {!company && <div className="card-add-button">+</div>}
      </div>
    </div>
  );
};

CardPreview.propTypes = propTypes;

export default CardPreview;
