import { CardNumber } from "../../types";
import {
  hasInvalidKey,
  isFulfilledObject,
  isFulfilledString,
  isNumeric,
  isTheOtherGroupFulfilled,
} from "../../validator/Validator";
import { ErrorMessage } from "../CardExpirationDateInput/CardExpirationDateInput";
import { InputContainer, Input, Label } from "../common";

type CardNumberInputProps = {
  cardNumber: CardNumber;
  error: { cardNumberError: boolean; expirationError: boolean };
  setCardNumber: (value: CardNumber) => void;
  setError: (value: { cardNumberError: boolean; expirationError: boolean }) => void;
};

const CardNumberInput = ({ cardNumber, error, setCardNumber, setError }: CardNumberInputProps) => {
  const { firstGroup, secondGroup, thirdGroup, fourthGroup } = cardNumber;

  const onChangeCardNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (!isNumeric(value)) return;
    setCardNumber({ ...cardNumber, [name]: value });

    if (isTheOtherGroupFulfilled(cardNumber, name) && isFulfilledString(value, 4))
      setError({ ...error, cardNumberError: false });
  };

  const onBlurCardNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    if (isFulfilledString(name, 4) || hasInvalidKey(cardNumber)) {
      setError({ ...error, cardNumberError: true });
      return;
    }

    if (isFulfilledObject(cardNumber, 4)) setError({ ...error, cardNumberError: false });
  };

  return (
    <Label>
      카드번호
      <InputContainer width="318px" border={error.cardNumberError ? "3px solid #f09c9c" : "none"}>
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
          autoFocus
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
      {error.cardNumberError && <ErrorMessage>카드번호 입력 형식이 잘못되었습니다.</ErrorMessage>}
    </Label>
  );
};

export default CardNumberInput;
