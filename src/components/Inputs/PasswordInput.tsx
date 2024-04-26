import * as S from './common.style';
import { PASSWORD } from '../../constants/cardSection';
import { UseInputReturn } from '../../hooks/useInput';
import InputSection from '../InputSection';
import Input from '../composables/Input';
import ScreenReaderOnlyLabel from '../composables/ScreenReaderOnlyLabel';

interface Props {
  password: UseInputReturn<HTMLInputElement>;
}

export default function PasswordInput({ password }: Props) {
  return (
    <S.Wrapper>
      <InputSection title={PASSWORD.title} inputTitle={PASSWORD.inputTitle}>
        <ScreenReaderOnlyLabel htmlFor={'password'} description={'비밀번호 입력'} />
        <Input
          isAutoFocus={true}
          ref={password.ref}
          id="password"
          maxLength={2}
          onChange={password.onChangeHandler}
          onBlur={password.onBlurHandler}
          isError={password.isError}
          placeholder={PASSWORD.placeholder}
          type="password"
          value={password.value}
        />
      </InputSection>
      <S.ErrorWrapper>
        <S.ErrorMessage>{password.isError && password.errorMessage}</S.ErrorMessage>
      </S.ErrorWrapper>
    </S.Wrapper>
  );
}
