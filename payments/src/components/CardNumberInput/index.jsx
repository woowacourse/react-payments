import "./index.scss";
import InputContainer from "../elements/InputContainer";
import { Input } from "../elements/Input";
import useControllInput from "../../hooks/useControllInput";
import InputLabel from "../elements/label";

const CardNumberInput = () => {
  const { itemRef, onChange } = useControllInput({
    maxlength: 4,
    isNumber: true,
  });

  return (
    <div className="card-number__input__container">
      <InputLabel>카드 번호</InputLabel>
      <div className="input__container--inputs">
        <InputContainer>
          <Input
            onChange={onChange}
            type="text"
            ref={(el) => (itemRef.current[0] = el)}
          />
          -
          <Input
            onChange={onChange}
            ref={(el) => (itemRef.current[1] = el)}
            type="text"
          />
          -
          <Input
            onChange={onChange}
            ref={(el) => (itemRef.current[2] = el)}
            type="password"
            maxLength="4"
          />
          -
          <Input
            onChange={onChange}
            ref={(el) => (itemRef.current[3] = el)}
            type="password"
            maxLength="4"
          />
        </InputContainer>
      </div>
    </div>
  );
};

export default CardNumberInput;
