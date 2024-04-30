import InputContainer from '../../common/InputContainer';
import Input from '../../common/Input';
import { IInputControl } from '../../../hooks/useInput';
import * as S from '../../../styles/common';
import makeUniqueString from '../../../utils/getUniqueId';

export default function PasswordInputContainer({ value, onChange, onBlur, errorStatus }: IInputControl) {
  const inputId = makeUniqueString(`password-input`);

  return (
    <div>
      <InputContainer
        title="비밀번호를 입력해 주세요"
        subtitle="앞의 2자리를 입력해 주세요"
        labelFor={inputId}
        labelText="비밀번호 앞 2자리"
      >
        <Input
          id={inputId}
          isError={errorStatus.isError}
          value={value}
          maxLength={2}
          type="password"
          width="100%"
          onChange={onChange}
          onBlur={onBlur}
          placeholder="12"
          autoFocus={true}
        />
      </InputContainer>
      <S.ErrorWrapper>
        <S.ErrorText>{errorStatus.errorMessage}</S.ErrorText>
      </S.ErrorWrapper>
    </div>
  );
}
