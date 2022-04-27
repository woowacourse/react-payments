import InputContainer from "../elements/InputContainer";
import { Input } from "../elements/Input";
import "./index.scss";
import InputLabel from "../elements/label";
import useControllInput from "../../hooks/useControllInput";

const SecureCodeInput = ({ state, updateForm }) => {
  const { itemRef, onChange } = useControllInput({
    maxLength: 3,
    isNumber: true,
  });
  return (
    <div className="secure__input__container">
      <InputLabel>보안코드(CVC/CVV)</InputLabel>
      <InputContainer>
        <Input
          ref={(el) => {
            itemRef.current[0] = el;
          }}
          type="password"
          maxLength="3"
          value={state}
          onChange={(e) => {
            onChange(e);
            updateForm(e.target.value);
          }}
        />
      </InputContainer>
      <button className="help--button tooltip">
        ?
        <span class="tooltiptext tooltip-bottom">
          카드 뒷면의 세자리 숫자를 확인해주세요!
        </span>
      </button>
    </div>
  );
};

export default SecureCodeInput;
