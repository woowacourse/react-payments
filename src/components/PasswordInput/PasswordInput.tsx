import Input from "../Input/Input";
import InputContainer from "../InputContainer/InputContainer";
import { useCardContext } from "../../contexts/CardContext";
import { CARD_VALIDATION_INFO } from "../../constants/cardValidationInfo";
import { INPUT_CONTAINER } from "../../constants/title";

const PasswordInput = () => {
  const { formValues, formErrors, passwordInputRef, handlePassword } =
    useCardContext();

  return (
    <InputContainer
      title={INPUT_CONTAINER.PASSWORD.TITLE}
      subTitle={INPUT_CONTAINER.PASSWORD.SUBTITLE}
    >
      <label className="label">비밀번호 앞 2자리</label>
      <div className="inputContainer">
        <Input
          type="password"
          name="password"
          placeholder="12"
          value={formValues.password}
          onChange={handlePassword}
          ref={(element) => {
            passwordInputRef.current = element;
          }}
          error={formErrors.password !== ""}
          maxLength={CARD_VALIDATION_INFO.PASSWORD_MAX_LENGTH}
          autoFocus
        />
      </div>
      <p className="helperText">{formErrors.password}</p>
    </InputContainer>
  );
};

export default PasswordInput;
