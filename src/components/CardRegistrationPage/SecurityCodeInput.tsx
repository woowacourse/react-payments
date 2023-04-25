import { INPUT_LENGTH } from "../../constants";
import { isNumber, isOverMaxLength } from "../../utils";
import Input from "../common/Input";
import InputBox from "../common/InputBox";
import InputGroup from "../common/InputGroup";
import { useCardItemAction, useCardItemValue } from "../provider/CardItemProvider";
import { useErrorMessageAction, useErrorMessageValue } from "../provider/ErrorMessageProvider";

const SecurityCodeInput = () => {
  const { securityCode } = useCardItemValue();
  const { setSecurityCode } = useCardItemAction();

  const { securityCodeErrorMessage } = useErrorMessageValue();
  const { setSecurityCodeErrorMessage } = useErrorMessageAction();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isOverMaxLength(inputValue, INPUT_LENGTH.SECURITY_CODE)) return;

    if (!isNumber(inputValue)) {
      setSecurityCodeErrorMessage("숫자만 입력해주세요");
      return;
    }

    setSecurityCode(inputValue.toUpperCase());
    setSecurityCodeErrorMessage("");
  };

  return (
    <InputGroup labelValue={"보안 코드(CVC/CVV)"} errorMessage={securityCodeErrorMessage}>
      <InputBox width="100px" isError={!!securityCodeErrorMessage}>
        <Input type="password" value={securityCode} onChange={handleChangeInput} />
      </InputBox>
    </InputGroup>
  );
};

export default SecurityCodeInput;
