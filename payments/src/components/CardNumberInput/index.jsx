import "./index.scss";
import InputContainer from "../elements/InputContainer";
import { InputContents } from "../elements/InputContents";
import useControllInput from "../../hooks/useControllInput";

const CardNumberInput = () => {
  const { itemRef, onChange } = useControllInput(4);

  return (
    <div className="card-number__input__container">
      <InputContainer labelName={"카드번호"} classList={[""]}>
        <InputContents
          onChange={onChange}
          type="number"
          ref={(el) => (itemRef.current[0] = el)}
        />
        -
        <InputContents
          onChange={onChange}
          ref={(el) => (itemRef.current[1] = el)}
          type="number"
        />
        -
        <InputContents
          onChange={onChange}
          ref={(el) => (itemRef.current[2] = el)}
          type="password"
          maxLength="4"
        />
        -
        <InputContents
          onChange={onChange}
          ref={(el) => (itemRef.current[3] = el)}
          type="password"
          maxLength="4"
        />
      </InputContainer>
    </div>
  );
};

export default CardNumberInput;
