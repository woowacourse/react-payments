import { useRef } from "react";
import Input from "../common/Input";
import InputBox from "../common/InputBox";
import InputGroup from "../common/InputGroup";
import InputSeparator from "../common/InputSeparator";
import { isNumber, isOverMaxLength } from "../../utils";
import { INPUT_LENGTH } from "../../constants";
import { useCardItemAction, useCardItemValue } from "../provider/CardItemProvider";
import { useErrorMessageAction, useErrorMessageValue } from "../provider/ErrorMessageProvider";
import useInputFocus from "../../hooks/useInputFocus";

const CardNumberInput = () => {
  const { cardNumber } = useCardItemValue();
  const { setCardNumber } = useCardItemAction();

  const { cardNumberErrorMessage } = useErrorMessageValue();
  const { setCardNumberErrorMessage } = useErrorMessageAction();

  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const { isNextInputFocusable, focusNextInput } = useInputFocus(refs, INPUT_LENGTH.CARD_NUMBER);

  const handleChangeInput = (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isOverMaxLength(inputValue, INPUT_LENGTH.CARD_NUMBER)) return;

    if (!isNumber(inputValue)) {
      setCardNumberErrorMessage("숫자만 입력해주세요");
      return;
    }

    const newCardNumber = [...cardNumber];
    newCardNumber[inputIndex] = inputValue;

    setCardNumber(newCardNumber);
    setCardNumberErrorMessage("");

    if (isNextInputFocusable(inputValue, inputIndex)) {
      focusNextInput(inputIndex);
    }
  };

  return (
    <InputGroup labelValue="카드 번호" errorMessage={cardNumberErrorMessage}>
      <InputBox isError={!!cardNumberErrorMessage}>
        <Input ref={refs[0]} value={cardNumber[0]} onChange={handleChangeInput(0)} />
        <InputSeparator>-</InputSeparator>
        <Input ref={refs[1]} value={cardNumber[1]} onChange={handleChangeInput(1)} />
        <InputSeparator>-</InputSeparator>
        <Input ref={refs[2]} value={cardNumber[2]} type="password" onChange={handleChangeInput(2)} />
        <InputSeparator>-</InputSeparator>
        <Input ref={refs[3]} value={cardNumber[3]} type="password" onChange={handleChangeInput(3)} />
      </InputBox>
    </InputGroup>
  );
};

export default CardNumberInput;
