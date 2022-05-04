import { cardInfos } from "../../constants";
import ColorBox from "../ColorBox/colorBox.component";
import "./CardTypeSelector.css";

const CardTypeSelector = ({ currentCardType, onClickCardType }) => {
  return (
    <div className="colorbox-grid-container">
      {cardInfos.map((cardInfo, idx) => (
        <ColorBox
          {...cardInfo}
          currentCardType={currentCardType}
          key={idx}
          idx={idx}
          onClickCardType={onClickCardType}
        />
      ))}
    </div>
  );
};

export default CardTypeSelector;
