import { INPUT_LENGTH } from "../../constants";
import { isNumber, isOverMaxLength } from "../../utils";
import Input from "../common/Input";
import InputBox from "../common/InputBox";
import InputGroup from "../common/InputGroup";

interface SecurityCodeInputProps {
  securityCode: string;
  setSecurityCode: (securityCode: string) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}

const SecurityCodeInput = ({
  securityCode,
  setSecurityCode,
  errorMessage,
  setErrorMessage,
}: SecurityCodeInputProps) => {
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isOverMaxLength(inputValue, INPUT_LENGTH.SECURITY_CODE)) return;

    if (!isNumber(inputValue)) {
      setErrorMessage("숫자만 입력해주세요");
      return;
    }

    setSecurityCode(inputValue.toUpperCase());
    setErrorMessage("");
  };

  return (
    <InputGroup labelValue={"보안 코드(CVC/CVV)"} errorMessage={errorMessage}>
      <InputBox width="100px" isError={!!errorMessage}>
        <Input type="password" value={securityCode} onChange={handleChangeInput} />
      </InputBox>
    </InputGroup>
  );
};

export default SecurityCodeInput;
