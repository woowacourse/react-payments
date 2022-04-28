import useControllInput from "../../hooks/useControllInput";
import InputContainer from "../elements/InputContainer";
import { Input } from "../elements/Input";
import "./index.scss";
import InputLabel from "../elements/label";

const ExpiredDateInput = ({ state, updateForm }) => {
  const { itemRef, controllInput } = useControllInput({
    maxLength: 2,
    isNumber: true,
  });

  const update = (number, index) => {
    updateForm(number, index);
  };

  return (
    <div className="expire__input__container">
      <InputLabel>만료일</InputLabel>
      <InputContainer>
        <Input
          placeholder="MM"
          type="text"
          value={state[0]}
          ref={(el) => {
            itemRef.current[0] = el;
          }}
          onChange={(e) => {
            controllInput(e);
            update(e.target.value, 0);
          }}
        />
        /
        <Input
          placeholder="YY"
          type="text"
          value={state[1]}
          ref={(el) => {
            itemRef.current[1] = el;
          }}
          onChange={(e) => {
            controllInput(e);
            update(e.target.value, 1);
          }}
        />
      </InputContainer>
    </div>
  );
};

export default ExpiredDateInput;
