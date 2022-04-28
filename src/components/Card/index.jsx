import PropTypes from 'prop-types';

function Card({ companyName, cardNumber, userName, expireMonth, expireYear }) {
  return (
    <div className="card-box">
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">{companyName}</span>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text user-name">{userName}</span>
            <span className="card-text expire-date">
              {expireMonth && expireYear && `${expireMonth} / ${expireYear}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  companyName: '',
  cardNumber: '',
  userName: '',
  expireMonth: '',
  expireYear: '',
};

Card.propTypes = {
  companyName: PropTypes.string,
  cardNumber: PropTypes.string,
  userName: PropTypes.string,
  expireMonth: PropTypes.string,
  expireYear: PropTypes.string,
};

export default Card;
