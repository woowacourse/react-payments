import InputContainer from "../../common/InputContainer";
import { Input } from "../../common/Input";
import "./index.scss";
import InputLabel from "../../common/label";
import { blockCharacter, limitInputLength } from "../../../util/input";
import { CardContext } from "../../../context/CardProvider";
import { useContext } from "react";

const INPUT_LENGTH = 3;

const SecureCodeInput = () => {
  const {
    cardInfo: { secureCode },
    updateCard,
  } = useContext(CardContext);
  const updateSecureCode = ({ target }) => {
    updateCard({
      type: "secureCode",
      payload: {
        value: limitInputLength(blockCharacter(target.value), INPUT_LENGTH),
      },
    });
  };

  return (
    <div className="secure__input__container">
      <InputLabel>보안코드(CVC/CVV)</InputLabel>
      <InputContainer>
        <Input
          type="password"
          maxLength="3"
          value={secureCode}
          onChange={updateSecureCode}
          testId={"secure-code"}
        />
      </InputContainer>
      <button type="button" className="help--button tooltip">
        ?
        <span className="tooltip-text tooltip-bottom">
          카드 뒷면의 세자리 숫자를 확인해주세요!
        </span>
      </button>
    </div>
  );
};

export default SecureCodeInput;
