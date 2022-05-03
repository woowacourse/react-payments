import InputContainer from "../elements/InputContainer";
import { Input } from "../elements/Input";
import "./index.scss";
import InputLabel from "../elements/label";
import { blockCharacter, limitInputLength } from "../../util/input";

const INPUT_LENGTH = 3;

const SecureCodeInput = ({ state, updateForm }) => {
  return (
    <div className="secure__input__container">
      <InputLabel>보안코드(CVC/CVV)</InputLabel>
      <InputContainer>
        <Input
          type="password"
          maxLength="3"
          value={state}
          onChange={({ target }) => {
            updateForm({
              type: "secureCode",
              payload: {
                value: limitInputLength(
                  blockCharacter(target.value),
                  INPUT_LENGTH
                ),
              },
            });
          }}
        />
      </InputContainer>
      <button type="button" className="help--button tooltip">
        ?
        <span className="tooltiptext tooltip-bottom">
          카드 뒷면의 세자리 숫자를 확인해주세요!
        </span>
      </button>
    </div>
  );
};

export default SecureCodeInput;
