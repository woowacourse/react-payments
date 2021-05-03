import "../style/background.css";
import "./style.css";
import PropTypes from "prop-types";
import { CARD_SIZE } from "../../constants";

const CardAdditionButton = ({ size, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`card-addition-button card card--${size} font-${size}`}
    >
      <div className="card__inner bg-gray">
        <span>+</span>
      </div>
    </button>
  );
};

CardAdditionButton.propTypes = {
  size: PropTypes.oneOf(Object.values(CARD_SIZE)).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardAdditionButton;
