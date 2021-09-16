import { useRef } from "react";
import { shuffle } from "../../utils";
import "./style.css";

const VirtualKeyboard = ({ insertInputChar, deleteInputChar }) => {
  const keyInputs = useRef([
    { value: "1", key: 1 },
    { value: "2", key: 2 },
    { value: "3", key: 3 },
    { value: "4", key: 4 },
    { value: "5", key: 5 },
    { value: "6", key: 6 },
    { value: "7", key: 7 },
    { value: "8", key: 8 },
    { value: "9", key: 9 },
    { value: "0", key: 10 },
    { value: "", key: 11 },
    { value: "", key: 12 },
  ]);

  const onNumberClick = ({ target }) => {
    const value = target.dataset.number;

    insertInputChar(value);
    shuffle(keyInputs.current);
  };

  const onDeletionClick = () => {
    deleteInputChar();
    shuffle(keyInputs.current);
  };

  return (
    <>
      <div className="virtual-keyboard">
        {keyInputs.current.map((keyInput) => (
          <button
            key={keyInput.key}
            className={`key-input ${keyInput.value || "visible-none"}`}
            data-number={keyInput.value}
            onClick={onNumberClick}
          >
            {keyInput.value}
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
