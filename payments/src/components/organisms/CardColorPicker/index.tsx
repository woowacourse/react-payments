import "./index.scss";

import Color from "../../common/Color";

import { useCardContext } from "../../../context/CardProvider";
import { CARD_ACTION } from "../../../hooks/useCard";

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

const CardColorPicker = ({ closeModal }: { closeModal: () => void }) => {
  const { updateCard } = useCardContext();
  const pickColor = (name: string, color: string) => {
    closeModal();
    updateCard({
      type: CARD_ACTION.SET_CARD_NAME,
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
            closeModal();
          }}
        />
      ))}
    </div>
  );
};

export default CardColorPicker;
