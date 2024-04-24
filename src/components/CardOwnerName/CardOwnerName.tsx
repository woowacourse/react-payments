import { useEffect } from "react";
import Input from "../atoms/Input/Input";
import { TitleText, LabelText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { isOwnerNameLength, isUpperCase } from "../../utils/validators";
import useInput from "../../hooks/useInput";
import * as S from "./style";

interface Props {
  cardOwnerName: CardInfoValue;
  onChangeCardInfo: (inputValue: CardInfoValue, inputId: string) => void;
}

export default function CardOwnerName({
  cardOwnerName,
  onChangeCardInfo,
}: Props) {
  const { value, onChange, onBlur, validateMessage } = useInput("", {
    validateOnChange: [isUpperCase],
    validateOnBlur: [isUpperCase, isOwnerNameLength],
  });

  useEffect(() => {
    const newCardOwnerName = cardOwnerName;

    newCardOwnerName.value = value;
    newCardOwnerName.isError = validateMessage !== "";

    onChangeCardInfo(newCardOwnerName, "cardOwnerName");
  }, [value, validateMessage]);
  // TODO: useEffect를 대체할 방법은 없을까? 부수 효과가 아닌데 effect 사용이 적절한가?
  // validateMessage를 넣은 이유는 빈 칸인 상태에서 blur 시, 에러메시지가 바뀌지만 isError가 안바뀌어서

  return (
    <S.CardOwnerNameContainer>
      <TitleText>카드 소유자 이름을 입력해 주세요</TitleText>
      <S.CardOwnerNameBox>
        <LabelText htmlFor="cardOwnerName">소유자 이름</LabelText>
        <S.InputContainer>
          <Input
            id="cardOwnerName"
            maxLength={15}
            placeholder="JOHN DOE"
            value={cardOwnerName.value}
            isError={cardOwnerName.isError}
            onChange={onChange}
            onBlur={onBlur}
          />
        </S.InputContainer>
        <ErrorMessage message={validateMessage} />
      </S.CardOwnerNameBox>
    </S.CardOwnerNameContainer>
  );
}
