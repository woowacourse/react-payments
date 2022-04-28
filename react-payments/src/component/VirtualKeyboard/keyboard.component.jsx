import "./keyboard.css";

const VirtualKeyboard = ({
  onClickVirtualKeyboard,
  onClickCloseButton,
  onClickBackspaceButton,
}) => {
  const keyboardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="keyboard-container">
      {keyboardArray.map((keyboard, idx) => (
        <div
          className="keyboard"
          key={idx}
          data-testid={keyboard}
          onClick={() => onClickVirtualKeyboard(keyboard)}
        >
          {keyboard}
        </div>
      ))}
      <div
        className="keyboard"
        onClick={onClickBackspaceButton}
        data-testid="⬅️"
      >
        ⬅️
      </div>
      <div className="keyboard" onClick={onClickCloseButton} data-testid="X">
        X
      </div>
    </div>
  );
};

export default VirtualKeyboard;
