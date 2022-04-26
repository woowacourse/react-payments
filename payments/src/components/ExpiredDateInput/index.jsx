import useControllInput from "../../hooks/useControllInput";
import InputContainer from "../elements/InputContainer";
import { InputContents } from "../elements/InputContents";
import "./index.scss";

const ExpiredDateInput = () => {
  const { itemRef, onChange } = useControllInput(2);
  return (
    <div className="expire__input__container">
      <InputContainer labelName="만료일">
        <InputContents
          placeholder="MM"
          type="number"
          ref={(el) => {
            itemRef.current[0] = el;
          }}
          onChange={onChange}
        />
        /
        <InputContents
          placeholder="YY"
          type="number"
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
