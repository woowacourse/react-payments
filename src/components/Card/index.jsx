import PropTypes from 'prop-types';

function Card({ name }) {
  return (
    <div className="card-box">
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">{name}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">1111 - 2222 - oooo - oooo</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">NAME</span>
            <span className="card-text">MM / YY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  name: '카드 회사',
};

Card.propTypes = {
  name: PropTypes.string,
};

export default Card;
