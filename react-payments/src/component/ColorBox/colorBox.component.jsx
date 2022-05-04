import "./colorBox.css";
import { cardInfos } from "../../constants";

const ColorBox = ({
  colorType,
  cardType,
  idx,
  onClickCardType,
  currentCardType,
}) => {
  return (
    <div className="color-box-container">
      <div
        className={`${colorType} color-box`}
        onClick={() => onClickCardType(idx)}
      />
      <div
        className={`color-box-text ${
          currentCardType === cardInfos[idx].cardType && "selected"
        }`}
      >
        {cardType}
      </div>
    </div>
  );
};

export default ColorBox;
