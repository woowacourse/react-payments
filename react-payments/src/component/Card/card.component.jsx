import Dot from "../Dot/dot.component";
import "./card.css";

const Card = ({ name, month, year, cardNumbers }) => {
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top"></div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-number-text">
            {cardNumbers.map((cardNumber, idx) => {
              if (idx >= 2) {
                return (
                  <div className="card-dot-container">
                    {Array.from(cardNumber).map((_) => (
                      <Dot dotClass="card-number" />
                    ))}
                  </div>
                );
              }
              return <p>{cardNumber}</p>;
            })}
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{name}</span>
            <span className="card-text">
              {month} / {year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
