import Portal from "../../Portal";
import Color from "../Color";
import Modal from "../Modal";
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

const CardColorPicker = ({ closeModal, updateForm }) => {
  const pickColor = (name, color) => {
    closeModal();
    updateForm({
      type: "pickColor",
      payload: { cardName: name, color },
    });
  };

  return (
    <Portal>
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
    </Portal>
  );
};

export default CardColorPicker;
