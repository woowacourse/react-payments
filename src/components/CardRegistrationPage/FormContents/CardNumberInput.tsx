import { INPUT_MAX_LENGTH } from "../../../constants";
import useInputFocus from "../../../hooks/useInputFocus";
import Input from "../../common/Input";
import InputBox from "../../common/InputBox";
import InputGroup from "../../common/InputGroup";
import InputSeparator from "../../common/InputSeparator";
import { useCardItemAction, useCardItemValue, useErrorMessageValue } from "../../provider/CardItemProvider";

const CardNumberInput = () => {
  const { cardNumber } = useCardItemValue();
  const { onChangeCardNumber } = useCardItemAction();
  const { cardNumberErrorMessage } = useErrorMessageValue();

  const { registRef, isNextInputFocusable, focusNextInput } = useInputFocus(INPUT_MAX_LENGTH.CARD_NUMBER);

  const handleChangeCardNumber = (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    onChangeCardNumber(inputIndex)(inputValue);

    if (isNextInputFocusable(inputValue, inputIndex)) focusNextInput(inputIndex);
  };

  return (
    <InputGroup labelValue="카드 번호" errorMessage={cardNumberErrorMessage}>
      <InputBox isError={!!cardNumberErrorMessage}>
        <Input ref={(element) => registRef(0, element)} value={cardNumber[0]} onChange={handleChangeCardNumber(0)} />
        <InputSeparator>-</InputSeparator>
        <Input ref={(element) => registRef(1, element)} value={cardNumber[1]} onChange={handleChangeCardNumber(1)} />
        <InputSeparator>-</InputSeparator>
        <Input
          ref={(element) => registRef(2, element)}
          value={cardNumber[2]}
          type="password"
          onChange={handleChangeCardNumber(2)}
        />
        <InputSeparator>-</InputSeparator>
        <Input
          ref={(element) => registRef(3, element)}
          value={cardNumber[3]}
          type="password"
          onChange={handleChangeCardNumber(3)}
        />
      </InputBox>
    </InputGroup>
  );
};

export default CardNumberInput;
