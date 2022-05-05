import { useContext } from "react";
import { CardContext } from "../../../context/CardProvider";
import Color from "../../common/Color";
import "./index.scss";

const CARD_CATEGORY = [
  { name: "록1바", color: "red" },
  { name: "록2바", color: "orange" },
  { name: "록3바", color: "yellow" },
  { name: "록4바", color: "green" },
  { name: "록5바", color: "blue" },
  { name: "록6바", color: "pink" },
  { name: "록7바", color: "purple" },
  { name: "록8바", color: "gold" },
];

const CardColorPicker = ({ closeModal }) => {
  const { dispatch } = useContext(CardContext);
  const pickColor = (name, color) => {
    closeModal();
    dispatch({
      type: "pickColor",
      payload: { cardName: name, color },
    });
  };

  return (
    <div className="palette">
      {CARD_CATEGORY.map((card) => (
        <Color
          key={card.color}
          name={card.name}
          color={card.color}
          onClick={() => {
            pickColor(card.name, card.color);
          }}
          setVisible={closeModal}
        />
      ))}
    </div>
  );
};

export default CardColorPicker;
