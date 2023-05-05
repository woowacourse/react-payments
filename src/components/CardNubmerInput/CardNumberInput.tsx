import { memo, useState } from "react";
import { CardNumber } from "../../types";
import { isFulfilledObject, isFulfilledString, isNumeric, isTheOtherGroupFulfilled } from "../../validator/Validator";
import { ErrorMessage } from "../CardExpirationDateInput/CardExpirationDateInput";
import { InputContainer, Input, Label } from "../common";

type CardNumberInputProps = {
  cardNumber: CardNumber;
  setCardNumber: (value: CardNumber) => void;
};

const CardNumberInput = ({ cardNumber, setCardNumber }: CardNumberInputProps) => {
  const { firstGroup, secondGroup, thirdGroup, fourthGroup } = cardNumber;
  const [error, setError] = useState<boolean>(false);

  const onChangeCardNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (!isNumeric(value)) return;
    setCardNumber({ ...cardNumber, [name]: value });

    if (isTheOtherGroupFulfilled(cardNumber, name) && isFulfilledString(value, 4) && error) setError(false);
  };

  const onBlurCardNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!isFulfilledString(value, 4) && !error) {
      setError(true);
      return;
    }

    if (isFulfilledObject(cardNumber, 4) && error) setError(false);
  };

  return (
    <Label>
      카드번호
      <InputContainer width="318px" border={error ? "3px solid #f09c9c" : "none"}>
        <Input
          value={firstGroup}
          name="firstGroup"
          inputMode="numeric"
          textAlign="center"
          width="55px"
          type="text"
          autoComplete="cc-number"
          minLength={4}
          maxLength={4}
          required
          onChange={onChangeCardNumberHandler}
          onBlur={onBlurCardNumberHandler}
        />
        <span>-</span>
        <Input
          value={secondGroup}
          name="secondGroup"
          inputMode="numeric"
          textAlign="center"
          width="55px"
          type="text"
          autoComplete="cc-number"
          minLength={4}
          maxLength={4}
          required
          onChange={onChangeCardNumberHandler}
          onBlur={onBlurCardNumberHandler}
        />
        <span>-</span>
        <Input
          value={thirdGroup}
          name="thirdGroup"
          inputMode="numeric"
          textAlign="center"
          width="55px"
          type="password"
          autoComplete="cc-number"
          minLength={4}
          maxLength={4}
          required
          onChange={onChangeCardNumberHandler}
          onBlur={onBlurCardNumberHandler}
        />
        <span>-</span>
        <Input
          value={fourthGroup}
          name="fourthGroup"
          inputMode="numeric"
          textAlign="center"
          width="55px"
          type="password"
          autoComplete="cc-number"
          minLength={4}
          maxLength={4}
          required
          onChange={onChangeCardNumberHandler}
          onBlur={onBlurCardNumberHandler}
        />
      </InputContainer>
      {error && <ErrorMessage>카드번호 입력 형식이 잘못되었습니다.</ErrorMessage>}
    </Label>
  );
};

const areEqual = (prevState: any, nextState: any) => {
  return prevState.cardNumber === nextState.cardNumber;
};

export default memo(CardNumberInput, areEqual);
