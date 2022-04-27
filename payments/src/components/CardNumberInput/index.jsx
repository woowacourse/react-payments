import "./index.scss";
import InputContainer from "../elements/InputContainer";
import { Input } from "../elements/Input";
import useControllInput from "../../hooks/useControllInput";
import InputLabel from "../elements/label";

const CardNumberInput = ({ state, updateForm }) => {
  const { itemRef, onChange } = useControllInput({
    maxLength: 4,
    isNumber: true,
  });

  function updateNumber(e, index) {
    updateForm(e.target.value, index);
  }

  return (
    <div className="card-number__input__container">
      <InputLabel>카드 번호</InputLabel>
      <InputContainer>
        <Input
          onChange={(e) => {
            onChange(e);
            updateNumber(e, 0);
          }}
          value={state[0]}
          type="text"
          ref={(el) => (itemRef.current[0] = el)}
        />
        -
        <Input
          onChange={(e) => {
            onChange(e);
            updateNumber(e, 1);
          }}
          value={state[1]}
          ref={(el) => (itemRef.current[1] = el)}
          type="text"
        />
        -
        <Input
          onChange={(e) => {
            onChange(e);
            updateNumber(e, 2);
          }}
          value={state[2]}
          ref={(el) => (itemRef.current[2] = el)}
          type="password"
          maxLength="4"
        />
        -
        <Input
          onChange={(e) => {
            onChange(e);
            updateNumber(e, 3);
          }}
          value={state[3]}
          ref={(el) => (itemRef.current[3] = el)}
          type="password"
          maxLength="4"
        />
      </InputContainer>
    </div>
  );
};

export default CardNumberInput;
