import { INPUT_MAX_LENGTH } from "../../../constants";
import useInputFocus from "../../../hooks/useInputFocus";
import Input from "../../common/Input";
import InputBox from "../../common/InputBox";
import InputGroup from "../../common/InputGroup";
import InputSeparator from "../../common/InputSeparator";
import { useCardItemAction, useCardItemValue, useErrorMessageValue } from "../../provider/CardItemProvider";

const ExpirationDateInput = () => {
  const { expirationDate } = useCardItemValue();
  const { onChangeExpirationDate, onBlurExpirationDate } = useCardItemAction();
  const { expirationDateErrorMessage } = useErrorMessageValue();

  const { registRef, isNextInputFocusable, focusNextInput } = useInputFocus(INPUT_MAX_LENGTH.EXPIRATION_DATE);

  const handleChangeMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    onChangeExpirationDate.onChangeMonth(inputValue);

    if (isNextInputFocusable(inputValue, 0)) focusNextInput(0);
  };

  const handleChangeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    onChangeExpirationDate.onChangeYear(inputValue);
  };

  const handleBlurMonth = (event: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    onBlurExpirationDate.onBlurMonth(inputValue);
  };

  const handleBlurYear = (event: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    onBlurExpirationDate.onBlurYear(inputValue);
  };

  return (
    <InputGroup labelValue="만료일" errorMessage={expirationDateErrorMessage}>
      <InputBox width="137px" isError={!!expirationDateErrorMessage}>
        <Input
          placeholder="MM"
          ref={(element) => registRef(0, element)}
          value={expirationDate[0]}
          onChange={handleChangeMonth}
          onBlur={handleBlurMonth}
        />
        <InputSeparator color="#737373">/</InputSeparator>
        <Input
          placeholder="YY"
          ref={(element) => registRef(1, element)}
          value={expirationDate[1]}
          onChange={handleChangeYear}
          onBlur={handleBlurYear}
        />
      </InputBox>
    </InputGroup>
  );
};

export default ExpirationDateInput;
