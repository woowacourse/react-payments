import "./index.scss";

const Card = ({
  cardInfo: { cardNumber, expiredDate, ownerName, cardName, color },
  onClick,
}) => {
  return (
    <div
      data-testid="card"
      className={`card__container ${color}`}
      onClick={onClick}
    >
      <p className="card__name">{cardName}</p>
      <div className="rfid"></div>
      <div className="card__numbers">
        <div className="number">{cardNumber[0]}</div>
        <div className="number">{cardNumber[1]}</div>
        <div className="dots">{"•".repeat(cardNumber[2].length)}</div>
        <div className="dots">{"•".repeat(cardNumber[3].length)}</div>
      </div>
      <div className="footer">
        <div className="owner__name">{ownerName || "NAME"}</div>
        <div className="expired__date">
          {expiredDate[0] || "MM"}/{expiredDate[1] || "YY"}
        </div>
      </div>
    </div>
  );
};

export default Card;
