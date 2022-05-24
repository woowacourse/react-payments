import "./index.scss";
import InputContainer from "../../common/InputContainer";
import Input from "../../common/Input";
import useControlInput from "../../../hooks/useControlInput";
import InputLabel from "../../common/label";
import { Fragment } from "react";
import { blockCharacter, limitInputLength } from "../../../util/input";
import { useCardContext } from "../../../context/CardProvider";
import { CARD_ACTION } from "../../../hooks/useCard";

const INPUT_LENGTH = 4;
const NUM_OF_INPUT = 4;
const BACKSPACE_KEY_CODE = 8;

const CardNumberInput = () => {
  const {
    cardInfo: { cardNumber },
    updateCard,
  } = useCardContext();

  const { itemRef, controlInput, autoFocusBackward } = useControlInput({
    maxLength: INPUT_LENGTH,
  });

  const updateCardNumber = (target, idx) => {
    updateCard({
      type: CARD_ACTION.SET_CARD_NUMBER,
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
    <div className="card-number__input__container">
      <InputLabel>카드 번호</InputLabel>
      <InputContainer>
        {new Array(NUM_OF_INPUT).fill().map((_, idx) => (
          <Fragment key={idx}>
            <Input
              onChange={({ target }) => {
                updateCardNumber(target, idx);
              }}
              onKeyDown={handleKeyDown}
              value={cardNumber[idx]}
              ref={(el) => (itemRef.current[idx] = el)}
              type={idx > 1 ? "password" : "text"}
              maxLength={INPUT_LENGTH}
              testId={`card-number-input${idx}`}
            />
            {idx === NUM_OF_INPUT - 1 ? "" : "-"}
          </Fragment>
        ))}
      </InputContainer>
    </div>
  );
};

export default CardNumberInput;
