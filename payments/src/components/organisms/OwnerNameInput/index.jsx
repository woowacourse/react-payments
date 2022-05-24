import "./index.scss";

import Input from "../../common/Input";
import InputContainer from "../../common/InputContainer";
import InputLabel from "../../common/label";

import { useCardContext } from "../../../context/CardProvider";

import { CARD_ACTION } from "../../../hooks/useCard";

import { limitExceptUpperCase, limitInputLength } from "../../../util/input";

const INPUT_LENGTH = 30;

const OwnerNameInput = () => {
  const {
    cardInfo: { ownerName },
    updateCard,
  } = useCardContext();
  const updateCardOwner = (target) => {
    updateCard({
      type: CARD_ACTION.SET_OWNER_NAME,
      payload: {
        value: limitInputLength(
          limitExceptUpperCase(target.value),
          INPUT_LENGTH
        ),
      },
    });
  };

  return (
    <div className="owner-name__input__container">
      <div className="label__container">
        <InputLabel>카드 소유자 이름(선택)</InputLabel>
        <InputLabel>{`${ownerName.length}/30`}</InputLabel>
      </div>
      <InputContainer>
        <Input
          type="text"
          value={ownerName}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요.(영어 대문자만 입력가능합니다.)"
          onChange={({ target }) => {
            updateCardOwner(target);
          }}
          testId={"owner-name"}
        />
      </InputContainer>
    </div>
  );
};

export default OwnerNameInput;
