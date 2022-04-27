import useControllInput from "../../hooks/useControllInput";
import { Input } from "../elements/Input";
import InputContainer from "../elements/InputContainer";
import InputLabel from "../elements/label";
import "./index.scss";

const OwnerNameInput = () => {
  const { itemRef, onChange } = useControllInput({
    maxLength: 30,
    isNumber: false,
  });
  return (
    <div className="ownername__input__container">
      <div className="label__container">
        <InputLabel>카드 소유자 이름(선택)</InputLabel>
        <InputLabel>0/30</InputLabel>
        <></>
      </div>
      <InputContainer>
        <Input
          ref={itemRef}
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={onChange}
        />
      </InputContainer>
    </div>
  );
};

export default OwnerNameInput;
