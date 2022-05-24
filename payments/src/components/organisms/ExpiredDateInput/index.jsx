import useControlInput from "../../../hooks/useControlInput";
import InputContainer from "../../common/InputContainer";
import { Input } from "../../common/Input";
import "./index.scss";
import InputLabel from "../../common/label";
import { Fragment, useContext } from "react";
import { blockCharacter, limitInputLength } from "../../../util/input";
import { CardContext } from "../../../context/CardProvider";
import { CARD_ACTION } from "../../../hooks/useCard";

const INPUT_LENGTH = 2;
const NUM_OF_INPUT = 2;
const BACKSPACE_KEY_CODE = 8;

const ExpiredDateInput = () => {
  const {
    cardInfo: { expiredDate },
    updateCard,
  } = useContext(CardContext);

  const { itemRef, controlInput, autoFocusBackward } = useControlInput({
    maxLength: INPUT_LENGTH,
  });

  const updateExpiredDate = (target, idx) => {
    updateCard({
      type: CARD_ACTION.SET_EXPIRED_DATE,
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
    <div className="expire__input__container">
      <InputLabel>만료일</InputLabel>
      <InputContainer>
        {new Array(NUM_OF_INPUT).fill().map((_, idx) => (
          <Fragment key={idx}>
            <Input
              placeholder={idx === 0 ? "MM" : "YY"}
              type="text"
              value={expiredDate[idx]}
              ref={(el) => {
                itemRef.current[idx] = el;
              }}
              onChange={({ target }) => {
                updateExpiredDate(target, idx);
              }}
              onKeyDown={handleKeyDown}
              testId={`expired-date${idx}`}
            />
            {idx === 0 ? "/" : ""}
          </Fragment>
        ))}
      </InputContainer>
    </div>
  );
};

export default ExpiredDateInput;
