import PropTypes from 'prop-types';

function Card({ companyName, cardNumber, userName, expireMonth, expireYear }) {
  return (
    <div className="card-box">
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">{companyName}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{userName}</span>
            <span className="card-text">{`${expireMonth} / ${expireYear}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  companyName: '콤피 카드',
  cardNumber: '1111-2222-3333-4444',
  userName: '류콤피',
  expireMonth: '05',
  expireYear: '28',
};

Card.propTypes = {
  companyName: PropTypes.string,
  cardNumber: PropTypes.string,
  userName: PropTypes.string,
  expireMonth: PropTypes.string,
  expireYear: PropTypes.string,
};

export default Card;
