import { useRef } from "react";
import Color from "../Color";
import ModalContainer from "../ModalContainer";
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

const ColorPicker = ({ visible, setVisible, updateForm }) => {
  const modalCotnets = useRef(null);

  return (
    <ModalContainer
      contentsRef={modalCotnets}
      visible={visible}
      setVisible={setVisible}
    >
      <div ref={modalCotnets} className="palette">
        {CARD_CATEGORY.map((card) => (
          <Color
            key={card.color}
            name={card.name}
            color={card.color}
            updateForm={updateForm}
            setVisible={setVisible}
          />
        ))}
      </div>
    </ModalContainer>
  );
};

export default ColorPicker;
