import Input from "../common/Input";
import InputBox from "../common/InputBox";
import InputGroup from "../common/InputGroup";
import InputSeparator from "../common/InputSeparator";
import { useCardItemAction, useCardItemValue, useErrorMessageValue } from "../provider/CardItemProvider";

const ExpirationDateInput = () => {
  const { expirationDate } = useCardItemValue();
  const { onChangeExpirationDate, registExpirationDateRef } = useCardItemAction();
  const { expirationDateErrorMessage } = useErrorMessageValue();

  return (
    <InputGroup labelValue="만료일" errorMessage={expirationDateErrorMessage}>
      <InputBox width="137px" isError={!!expirationDateErrorMessage}>
        <Input
          placeholder="MM"
          ref={(element) => registExpirationDateRef(0, element)}
          value={expirationDate[0]}
          onChange={onChangeExpirationDate(0)}
        />
        <InputSeparator color="#737373">/</InputSeparator>
        <Input
          placeholder="YY"
          ref={(element) => registExpirationDateRef(1, element)}
          value={expirationDate[1]}
          onChange={onChangeExpirationDate(1)}
        />
      </InputBox>
    </InputGroup>
  );
};

export default ExpirationDateInput;
