import Color from "../../common/Color";
import Modal from "../../common/Modal";
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

const CardColorPicker = ({ closeModal, onChangeCardName }) => {
  const pickColor = (name, color) => {
    closeModal();
    onChangeCardName({
      type: "pickColor",
      payload: { cardName: name, color },
    });
  };

  return (
    <Modal closeModal={closeModal}>
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
    </Modal>
  );
};

export default CardColorPicker;
