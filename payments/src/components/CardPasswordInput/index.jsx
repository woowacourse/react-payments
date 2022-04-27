import useControllInput from "../../hooks/useControllInput";
import { Input } from "../elements/Input";
import InputContainer from "../elements/InputContainer";
import InputLabel from "../elements/label";
import "./index.scss";
const CardPasswordInput = () => {
  const { itemRef, onChange } = useControllInput({
    maxlength: 1,
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
              onChange={onChange}
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
              onChange={onChange}
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
