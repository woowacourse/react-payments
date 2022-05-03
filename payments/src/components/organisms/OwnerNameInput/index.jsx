import { limitExceptUpperCase, limitInputLength } from "../../../util/input";
import { Input } from "../../common/Input";
import InputContainer from "../../common/InputContainer";
import InputLabel from "../../common/label";
import "./index.scss";

const INPUT_LENGTH = 30;

const OwnerNameInput = ({ ownerNameValue, onChangeOwner }) => {
  const updateCardOwner = (target) => {
    onChangeOwner({
      type: "ownerName",
      payload: {
        value: limitInputLength(
          limitExceptUpperCase(target.value),
          INPUT_LENGTH
        ),
      },
    });
  };

  return (
    <div className="ownername__input__container">
      <div className="label__container">
        <InputLabel>카드 소유자 이름(선택)</InputLabel>
        <InputLabel>{`${ownerNameValue.length}/30`}</InputLabel>
        <></>
      </div>
      <InputContainer>
        <Input
          type="text"
          value={ownerNameValue}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요.(영어 대문자만 입력가능합니다.)"
          onChange={({ target }) => {
            updateCardOwner(target);
          }}
        />
      </InputContainer>
    </div>
  );
};

export default OwnerNameInput;
