import { useEffect, useRef } from "react";
import Input from "../common/Input";
import InputBox from "../common/InputBox";
import InputGroup from "../common/InputGroup";
import InputSeparator from "../common/InputSeparator";
import { isInputsEmpty, isInputsSatisfied, isNumber, isOverMaxLength, isValidMonth } from "../../utils";
import { INPUT_LENGTH } from "../../constants";
import { useCardItemAction, useCardItemValue } from "../provider/CardItemProvider";
import { useErrorMessageAction, useErrorMessageValue } from "../provider/ErrorMessageProvider";

const ExpirationDateInput = () => {
  const { expirationDate } = useCardItemValue();
  const { setExpirationDate } = useCardItemAction();

  const { expirationDateErrorMessage } = useErrorMessageValue();
  const { setExpirationDateErrorMessage } = useErrorMessageAction();

  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  useEffect(() => {
    if (isInputsEmpty(expirationDate)) return;

    if (!isInputsSatisfied(expirationDate, INPUT_LENGTH.EXPIRATION_DATE)) {
      setExpirationDateErrorMessage("만료일은 MM/YY 형식으로 입력해주세요");
      return;
    }

    if (!isValidMonth(expirationDate[0])) {
      setExpirationDateErrorMessage("유효한 달을 입력해주세요");
      return;
    }
  }, [expirationDate, expirationDateErrorMessage, setExpirationDateErrorMessage]);

  const handleChangeInput = (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isOverMaxLength(inputValue, INPUT_LENGTH.EXPIRATION_DATE)) return;

    if (!isNumber(inputValue)) {
      setExpirationDateErrorMessage("숫자만 입력해주세요");
      return;
    }

    const newInputs = [...expirationDate];
    newInputs[inputIndex] = inputValue;

    setExpirationDate(newInputs);
    setExpirationDateErrorMessage("");

    if (isNextInputFocusable(inputValue, inputIndex)) {
      refs[inputIndex + 1].current?.focus();
    }
  };

  const isNextInputFocusable = (inputValue: string, inputIndex: number) => {
    return inputValue.length === INPUT_LENGTH.EXPIRATION_DATE && inputIndex < refs.length - 1;
  };

  return (
    <InputGroup labelValue="만료일" errorMessage={expirationDateErrorMessage}>
      <InputBox width="137px" isError={!!expirationDateErrorMessage}>
        <Input placeholder="MM" ref={refs[0]} value={expirationDate[0]} onChange={handleChangeInput(0)} />
        <InputSeparator color="#737373">/</InputSeparator>
        <Input placeholder="YY" ref={refs[1]} value={expirationDate[1]} onChange={handleChangeInput(1)} />
      </InputBox>
    </InputGroup>
  );
};

export default ExpirationDateInput;
