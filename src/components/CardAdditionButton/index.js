import "../style/background.css";
import "./style.css";

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

export default CardAdditionButton;
