import Input from "../common/Input";
import InputBox from "../common/InputBox";
import InputGroup from "../common/InputGroup";
import InputSeparator from "../common/InputSeparator";
import { useCardItemAction, useCardItemValue, useErrorMessageValue, useInputRefs } from "../provider/CardItemProvider";

const CardNumberInput = () => {
  const { cardNumber } = useCardItemValue();
  const { onChangeCardNumber } = useCardItemAction();
  const { cardNumberErrorMessage } = useErrorMessageValue();
  const { cardNumberRefs } = useInputRefs();

  return (
    <InputGroup labelValue="카드 번호" errorMessage={cardNumberErrorMessage}>
      <InputBox isError={!!cardNumberErrorMessage}>
        <Input ref={cardNumberRefs[0]} value={cardNumber[0]} onChange={onChangeCardNumber(0)} />
        <InputSeparator>-</InputSeparator>
        <Input ref={cardNumberRefs[1]} value={cardNumber[1]} onChange={onChangeCardNumber(1)} />
        <InputSeparator>-</InputSeparator>
        <Input ref={cardNumberRefs[2]} value={cardNumber[2]} type="password" onChange={onChangeCardNumber(2)} />
        <InputSeparator>-</InputSeparator>
        <Input ref={cardNumberRefs[3]} value={cardNumber[3]} type="password" onChange={onChangeCardNumber(3)} />
      </InputBox>
    </InputGroup>
  );
};

export default CardNumberInput;
