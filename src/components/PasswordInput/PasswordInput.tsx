import Input from "../Input/Input";
import InputContainer from "../InputContainer/InputContainer";
import { useCardContext } from "../../contexts/CardContext";
import { CARD_VALIDATION_INFO } from "../../constants/CardValidationInfo";
import { useEffect } from "react";

const PasswordInput = () => {
  const { password, passwordHelperText, passwordInputRef, handlePassword } =
    useCardContext();

  useEffect(() => {
    passwordInputRef.current?.focus();
  }, []);
  return (
    <InputContainer
      title="비밀번호를 입력해 주세요"
      subTitle="앞의 2자리를 입력해주세요"
    >
      <label className="label">비밀번호 앞 2자리</label>
      <div className="inputContainer">
        <Input
          type="password"
          name="password"
          placeholder="12"
          value={password}
          onChange={handlePassword}
          ref={(element) => {
            passwordInputRef.current = element;
          }}
          error={passwordHelperText !== ""}
          maxLength={CARD_VALIDATION_INFO.PASSWORD_MAX_LENGTH}
        />
      </div>
      <p className="helperText">{passwordHelperText}</p>
    </InputContainer>
  );
};

export default PasswordInput;
