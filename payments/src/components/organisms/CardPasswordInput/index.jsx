import { useContext } from "react";
import { CardContext } from "../../../context/CardProvider";
import useControllInput from "../../../hooks/useControllInput";
import { blockCharacter, limitInputLength } from "../../../util/input";
import { Input } from "../../common/Input";
import InputContainer from "../../common/InputContainer";
import InputLabel from "../../common/label";
import "./index.scss";

const INPUT_LENGTH = 1;
const NUM_OF_INPUT = 2;
const BACKSPACE_KEY_CODE = 8;

const CardPasswordInput = () => {
  const { itemRef, controllInput, autoFocusBackward } = useControllInput({
    maxLength: INPUT_LENGTH,
  });

  const {
    cardInfo: { password },
    dispatch,
  } = useContext(CardContext);

  const updateCardPassword = (target, idx) => {
    dispatch({
      type: "password",
      payload: {
        value: limitInputLength(blockCharacter(target.value), INPUT_LENGTH),
        index: idx,
      },
    });
    controllInput(target);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === BACKSPACE_KEY_CODE && e.target.value === "") {
      autoFocusBackward(e.target);
    }
  };

  return (
    <div className="password__input__container">
      <InputLabel>카드비밀번호</InputLabel>
      <div className="password__inputs">
        {new Array(NUM_OF_INPUT).fill().map((_, idx) => (
          <div className="password__input" key={idx}>
            <InputContainer>
              <Input
                type="password"
                ref={(el) => {
                  itemRef.current[idx] = el;
                }}
                value={password[idx]}
                onChange={({ target }) => {
                  updateCardPassword(target, idx);
                }}
                onKeyDown={handleKeyDown}
              />
            </InputContainer>
          </div>
        ))}
        <div className="password__input">
          <div className="dot" />
        </div>
        <div className="password__input">
          <div className="dot" />
        </div>
      </div>
    </div>
  );
};

export default CardPasswordInput;
