import Input from "../../common/Input";
import InputBox from "../../common/InputBox";
import InputGroup from "../../common/InputGroup";
import { useCardItemAction, useCardItemValue, useErrorMessageValue } from "../../provider/CardItemProvider";

const SecurityCodeInput = () => {
  const { securityCode } = useCardItemValue();
  const { onChangeSecurityCode } = useCardItemAction();
  const { securityCodeErrorMessage } = useErrorMessageValue();

  const handleChangeSecurityCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    onChangeSecurityCode(inputValue);
  };

  return (
    <InputGroup labelValue={"보안 코드(CVC/CVV)"} errorMessage={securityCodeErrorMessage}>
      <InputBox width="100px" isError={!!securityCodeErrorMessage}>
        <Input type="password" value={securityCode} onChange={handleChangeSecurityCode} />
      </InputBox>
    </InputGroup>
  );
};

export default SecurityCodeInput;
