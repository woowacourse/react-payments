import { cardInfos } from "../../constants";
import ColorBox from "../ColorBox/colorBox.component";
import "./modal.css";

const Modal = ({ toggleModal, onClickCardType, currentCardType }) => {
  return (
    <div className="modal-dimmed" onClick={toggleModal}>
      <div className="modal">
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
      </div>
    </div>
  );
};

export default Modal;
