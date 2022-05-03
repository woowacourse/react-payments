import useControllInput from "../../hooks/useControllInput";
import InputContainer from "../elements/InputContainer";
import { Input } from "../elements/Input";
import "./index.scss";
import InputLabel from "../elements/label";
import { Fragment } from "react";
import { blockCharacter, limitInputLength } from "../../util/input";

const INPUT_LENGTH = 2;
const NUM_OF_INPUT = 2;
const BACKSPACE_KEY_CODE = 8;

const ExpiredDateInput = ({ state, updateForm }) => {
  const { itemRef, controllInput, autoFocusBackward } = useControllInput({
    maxLength: INPUT_LENGTH,
  });

  const updateExpiredDate = (target, idx) => {
    updateForm({
      type: "expiredDate",
      payload: {
        value: limitInputLength(blockCharacter(target.value), INPUT_LENGTH),
        index: idx,
      },
    });
    controllInput(target);
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
              value={state[idx]}
              ref={(el) => {
                itemRef.current[idx] = el;
              }}
              onChange={({ target }) => {
                updateExpiredDate(target, idx);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === BACKSPACE_KEY_CODE && e.target.value === "") {
                  autoFocusBackward(e.target);
                }
              }}
            />
            {idx === 0 ? "/" : ""}
          </Fragment>
        ))}
      </InputContainer>
    </div>
  );
};

export default ExpiredDateInput;
