import "./index.scss";
import { Input } from "../../common/Input";
import InputContainer from "../../common/InputContainer";
import InputLabel from "../../common/label";

import { useCardContext } from "../../../context/CardProvider";

import { CARD_ACTION } from "../../../hooks/useCard";
import useControlInput from "../../../hooks/useControlInput";

import { blockCharacter, limitInputLength } from "../../../util/input";

const INPUT_LENGTH = 1;
const NUM_OF_INPUT = 2;
const BACKSPACE_KEY_CODE = 8;

const CardPasswordInput = () => {
  const { itemRef, controlInput, autoFocusBackward } = useControlInput({
    maxLength: INPUT_LENGTH,
  });

  const {
    cardInfo: { password },
    updateCard,
  } = useCardContext();

  const updateCardPassword = (target, idx) => {
    updateCard({
      type: CARD_ACTION.SET_PASSWORD,
      payload: {
        value: limitInputLength(blockCharacter(target.value), INPUT_LENGTH),
        index: idx,
      },
    });
    controlInput(target);
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
                testId={`password${idx}`}
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
