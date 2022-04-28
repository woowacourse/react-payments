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
        <div className="password__input">
          <InputContainer>
            <Input
              type="text"
              ref={(el) => {
                itemRef.current[0] = el;
              }}
              value={state[0]}
              onChange={(e) => {
                controllInput(e);
                updateForm(e.target.value, 0);
              }}
            />
          </InputContainer>
        </div>
        <div className="password__input">
          <InputContainer>
            <Input
              type="text"
              ref={(el) => {
                itemRef.current[1] = el;
              }}
              value={state[1]}
              onChange={(e) => {
                controllInput(e);
                updateForm(e.target.value, 1);
              }}
            />
          </InputContainer>
        </div>
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
