import useControllInput from "../../hooks/useControllInput";
import { Input } from "../elements/Input";
import InputContainer from "../elements/InputContainer";
import InputLabel from "../elements/label";
import "./index.scss";
const CardPasswordInput = ({ state, updateForm }) => {
  const { itemRef, controllInput } = useControllInput({
    maxLength: 1,
    isNumber: true,
  });
  return (
    <div className="password__input__container">
      <InputLabel>카드비밀번호</InputLabel>
      <div className="password__inputs">
        {new Array(2).fill().map((_, idx) => (
          <div className="password__input" key={idx}>
            <InputContainer>
              <Input
                type="text"
                ref={(el) => {
                  itemRef.current[idx] = el;
                }}
                value={state[idx]}
                onChange={({ target }) => {
                  controllInput(target);
                  updateForm({
                    type: "password",
                    payload: { value: target.value, index: idx },
                  });
                }}
              />
            </InputContainer>
          </div>
        ))}
        <div className="password__input">
          <div className="dot"></div>
        </div>
        <div className="password__input">
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default CardPasswordInput;
