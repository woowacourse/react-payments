import "./index.scss";

const Card = () => {
  return (
    <div>
      <div className="card__container">
        <p className="card__name">동키콩 카드</p>
        <div className="rfid"></div>
        <div className="card__numbers">
          <div className="number">1234</div>
          <div className="number">5678</div>
          <div className="dots">••••</div>
          <div className="dots">••••</div>
        </div>
        <div className="footer">
          <div className="owner__name">donkey</div>
          <div className="expired__date">04/21</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
