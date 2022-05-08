import useControllInput from "../../../hooks/useControllInput";
import InputContainer from "../../common/InputContainer";
import { Input } from "../../common/Input";
import "./index.scss";
import InputLabel from "../../common/label";
import { Fragment, useContext } from "react";
import { blockCharacter, limitInputLength } from "../../../util/input";
import { CardContext } from "../../../context/CardProvider";

const INPUT_LENGTH = 2;
const NUM_OF_INPUT = 2;
const BACKSPACE_KEY_CODE = 8;

const ExpiredDateInput = () => {
  const {
    cardInfo: { expiredDate },
    updateCard,
  } = useContext(CardContext);

  const { itemRef, controllInput, autoFocusBackward } = useControllInput({
    maxLength: INPUT_LENGTH,
  });

  const updateExpiredDate = (target, idx) => {
    updateCard({
      type: "expiredDate",
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
            />
            {idx === 0 ? "/" : ""}
          </Fragment>
        ))}
      </InputContainer>
    </div>
  );
};

export default ExpiredDateInput;
