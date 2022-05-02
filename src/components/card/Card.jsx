import PropTypes from 'prop-types';

function Card({ card }) {
  const isEmptyCard = Object.values(card).every((value) => value === '');

  return (
    <div className="card-box">
      <div className={isEmptyCard ? 'empty-card' : 'small-card'}>
        <div className="card-top">
          <span className="card-text">안카드</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{`${card.firstCardNumber} ${card.secondCardNumber}`}</span>
            <input
              className="card-text-dot"
              type="password"
              value={card.thirdCardNumber}
              disabled
            />
            <input
              className="card-text-dot"
              type="password"
              value={card.fourthCardNumber}
              disabled
            />
          </div>
        </div>
        <div className="card-bottom__info">
          <span className="card-text name-wrap">{card.ownerName || 'NAME'}</span>
          <span className="card-text">{`${card.expireMonth || 'MM'}/${
            card.expireYear || 'YY'
          }`}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    firstCardNumber: PropTypes.string.isRequired,
    secondCardNumber: PropTypes.string.isRequired,
    thirdCardNumber: PropTypes.string.isRequired,
    fourthCardNumber: PropTypes.string.isRequired,
    expireMonth: PropTypes.string.isRequired,
    expireYear: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
    securityCode: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
