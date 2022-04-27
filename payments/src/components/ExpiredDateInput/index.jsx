import useControllInput from "../../hooks/useControllInput";
import InputContainer from "../elements/InputContainer";
import { Input } from "../elements/Input";
import "./index.scss";
import InputLabel from "../elements/label";

const ExpiredDateInput = () => {
  const { itemRef, onChange } = useControllInput({
    maxlength: 2,
    isNumber: true,
  });
  return (
    <div className="expire__input__container">
      <InputLabel>만료일</InputLabel>
      <InputContainer>
        <Input
          placeholder="MM"
          type="text"
          ref={(el) => {
            itemRef.current[0] = el;
          }}
          onChange={onChange}
        />
        /
        <Input
          placeholder="YY"
          type="text"
          ref={(el) => {
            itemRef.current[1] = el;
          }}
          onChange={onChange}
        />
      </InputContainer>
    </div>
  );
};

export default ExpiredDateInput;
