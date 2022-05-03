import "./index.scss";
import InputContainer from "../elements/InputContainer";
import { Input } from "../elements/Input";
import useControllInput from "../../hooks/useControllInput";
import InputLabel from "../elements/label";
import { Fragment } from "react";

const INPUT_LENGTH = 4;
const NUM_OF_INPUT = 4;
const BACKSPACE_KEY_CODE = 8;

const CardNumberInput = ({ state, updateForm }) => {
  const {
    itemRef,
    controllInput,
    autoFocusBackward,
    blockCharacter,
    limitInputLength,
  } = useControllInput({
    maxLength: INPUT_LENGTH,
  });
  return (
    <div className="card-number__input__container">
      <InputLabel>카드 번호</InputLabel>
      <InputContainer>
        {new Array(NUM_OF_INPUT).fill().map((_, idx) => (
          <Fragment key={idx}>
            <Input
              onChange={({ target }) => {
                updateForm({
                  type: "cardNumber",
                  payload: {
                    value: limitInputLength(blockCharacter(target.value)),
                    index: idx,
                  },
                });
                controllInput(target);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === BACKSPACE_KEY_CODE && e.target.value === "") {
                  autoFocusBackward(e.target);
                }
              }}
              value={state[idx]}
              ref={(el) => (itemRef.current[idx] = el)}
              type={idx > 1 ? "password" : "text"}
              maxLength={INPUT_LENGTH}
            />
            {idx === NUM_OF_INPUT - 1 ? "" : "-"}
          </Fragment>
        ))}
      </InputContainer>
    </div>
  );
};

export default CardNumberInput;
