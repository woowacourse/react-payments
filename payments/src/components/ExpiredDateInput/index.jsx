import useControllInput from "../../hooks/useControllInput";
import InputContainer from "../elements/InputContainer";
import { Input } from "../elements/Input";
import "./index.scss";
import InputLabel from "../elements/label";
import { Fragment } from "react";

const ExpiredDateInput = ({ state, updateForm }) => {
  const { itemRef, controllInput, autoFocusBackward } = useControllInput({
    maxLength: 2,
    isNumber: true,
  });

  return (
    <div className="expire__input__container">
      <InputLabel>만료일</InputLabel>
      <InputContainer>
        {new Array(2).fill().map((_, idx) => (
          <Fragment key={idx}>
            <Input
              placeholder={idx === 0 ? "MM" : "YY"}
              type="text"
              value={state[idx]}
              ref={(el) => {
                itemRef.current[idx] = el;
              }}
              onChange={({ target }) => {
                controllInput(target);
                updateForm({
                  type: "expiredDate",
                  payload: { value: target.value, index: idx },
                });
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 8 && e.target.value === "") {
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
