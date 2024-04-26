import { useEffect } from "react";
import Input from "../atoms/Input/Input";
import { TitleText, LabelText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { isCardCVCLength, isCardNumber } from "../../utils/validators";
import useInput from "../../hooks/useInput";
import * as S from "./style";

interface Props {
  cardCVC: CardInfoValue;
  onChangeCardInfo: (inputValue: CardInfoValue, inputId: string) => void;
  onNext: () => void;
}

export default function CardCVC({ cardCVC, onChangeCardInfo, onNext }: Props) {
  const { value, onChange, onBlur, validateMessage } = useInput("", {
    validateOnChange: [isCardNumber],
    validateOnBlur: [isCardNumber, isCardCVCLength],
  });

  useEffect(() => {
    const newCardCVC = cardCVC;

    newCardCVC.value = value;
    newCardCVC.isError = validateMessage !== "";

    onChangeCardInfo(newCardCVC, "cardCVC");
    onNext();
  }, [value, validateMessage]);

  return (
    <S.CardOwnerNameContainer>
      <TitleText>CVC</TitleText>
      <S.CardOwnerNameBox>
        <LabelText htmlFor="cardCVC">CVC</LabelText>
        <S.InputContainer>
          <Input
            id="cardCVC"
            maxLength={3}
            placeholder="123"
            value={cardCVC.value}
            isError={cardCVC.isError}
            onChange={onChange}
            onBlur={onBlur}
          />
        </S.InputContainer>
        <ErrorMessage message={validateMessage} />
      </S.CardOwnerNameBox>
    </S.CardOwnerNameContainer>
  );
}
