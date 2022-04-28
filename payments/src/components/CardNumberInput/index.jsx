import "./index.scss";
import InputContainer from "../elements/InputContainer";
import { Input } from "../elements/Input";
import useControllInput from "../../hooks/useControllInput";
import InputLabel from "../elements/label";
import { Fragment } from "react";

const CardNumberInput = ({ state, updateForm }) => {
  const { itemRef, controllInput, autoFocusBackward } = useControllInput({
    maxLength: 4,
    isNumber: true,
  });
  return (
    <div className="card-number__input__container">
      <InputLabel>카드 번호</InputLabel>
      <InputContainer>
        {new Array(4).fill().map((_, idx) => (
          <Fragment key={idx}>
            <Input
              onChange={({ target }) => {
                controllInput(target);
                updateForm({
                  type: "cardNumber",
                  payload: { value: target.value, index: idx },
                });
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 8 && e.target.value === "") {
                  autoFocusBackward(e.target);
                }
              }}
              value={state[idx]}
              ref={(el) => (itemRef.current[idx] = el)}
              type={idx > 1 ? "password" : "text"}
              maxLength="4"
            />
            {idx === 3 ? "" : "-"}
          </Fragment>
        ))}
      </InputContainer>
    </div>
  );
};

export default CardNumberInput;
