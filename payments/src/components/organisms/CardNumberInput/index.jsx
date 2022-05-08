import "./index.scss";
import InputContainer from "../../common/InputContainer";
import { Input } from "../../common/Input";
import useControllInput from "../../../hooks/useControllInput";
import InputLabel from "../../common/label";
import { Fragment, useContext } from "react";
import { blockCharacter, limitInputLength } from "../../../util/input";
import { CardContext } from "../../../context/CardProvider";

const INPUT_LENGTH = 4;
const NUM_OF_INPUT = 4;
const BACKSPACE_KEY_CODE = 8;

const CardNumberInput = () => {
  const {
    cardInfo: { cardNumber },
    updateCard,
  } = useContext(CardContext);

  const { itemRef, controllInput, autoFocusBackward } = useControllInput({
    maxLength: INPUT_LENGTH,
  });

  const updateCardNumber = (target, idx) => {
    updateCard({
      type: "cardNumber",
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
            />
            {idx === NUM_OF_INPUT - 1 ? "" : "-"}
          </Fragment>
        ))}
      </InputContainer>
    </div>
  );
};

export default CardNumberInput;
