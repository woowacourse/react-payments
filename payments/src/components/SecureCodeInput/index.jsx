import InputContainer from "../elements/InputContainer";
import { Input } from "../elements/Input";
import "./index.scss";
import InputLabel from "../elements/label";
import useControllInput from "../../hooks/useControllInput";

const SecureCodeInput = () => {
  const { itemRef, onChange } = useControllInput({
    maxLength: 3,
    isNumber: true,
  });
  return (
    <div className="secure__input__container">
      <InputLabel>보안코드(CVC/CVV)</InputLabel>
      <InputContainer labelName={"보안코드(CVC/CVV)"}>
        <Input
          ref={itemRef}
          type="password"
          maxLength="3"
          onChange={onChange}
        />
      </InputContainer>
      <button className="help--button">?</button>
    </div>
  );
};

export default SecureCodeInput;
