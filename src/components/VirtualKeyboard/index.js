import { shuffle } from "../../utils";
import "./style.css";

const VirtualKeyboard = ({ insertInputChar, deleteInputChar }) => {
  const keyInputs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "", ""];

  shuffle(keyInputs);

  const onNumberClick = ({ target }) => {
    const value = target.dataset.number;

    insertInputChar(value);
  };

  const onDeletionClick = () => {
    deleteInputChar();
  };

  return (
    <>
      <div className="virtual-keyboard">
        {keyInputs.map((keyInput) => (
          //TODO: Button을 재활용할까...?
          <button
            className={`key-input ${keyInput || "visible-none"}`}
            data-number={keyInput}
            onClick={onNumberClick}
          >
            {keyInput}
          </button>
        ))}
        <div className="delete-container">
          <button
            className="delete-container__button"
            onClick={onDeletionClick}
          >
            del
          </button>
        </div>
      </div>
    </>
  );
};

export default VirtualKeyboard;
