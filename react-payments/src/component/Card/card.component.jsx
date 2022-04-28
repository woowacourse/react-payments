import { MIDDLE_CARD_NUMBER_LENGTH } from "../../constants";
import Dot from "../Dot/dot.component";
import "./card.css";

const Card = ({
  name,
  month,
  year,
  cardNumbers,
  cardTypeInfo,
  toggleModal,
}) => {
  return (
    <div className="card-box" onClick={toggleModal} data-testId="card">
      <div className={`card ${cardTypeInfo.colorType}`}>
        <div className="card-top">{cardTypeInfo.cardType}</div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-number-text">
            {cardNumbers.map((cardNumber, idx) => {
              if (idx >= MIDDLE_CARD_NUMBER_LENGTH) {
                return (
                  <div className="card-dot-container" key={idx}>
                    {Array.from(cardNumber).map((_, idx) => (
                      <Dot dotClass="card-number" key={"dot" + idx} />
                    ))}
                  </div>
                );
              }
              return <div key={idx}>{cardNumber}</div>;
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
