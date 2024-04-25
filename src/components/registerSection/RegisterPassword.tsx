import { forwardRef } from 'react';
import * as S from '../../app.style';
import InputSection from './InputSection';
import { PASSWORD } from '../../constants/cardSection';
import Label from '../composables/Label';
import Input from '../composables/Input';
import { MAX_LENGTH } from '../../constants/cardSection';
import { RegisterStepProps } from 'types';

const RegisterPassword = forwardRef<HTMLInputElement, Partial<RegisterStepProps>>((props, ref) => {
  const { value, onChange, isError, onBlur } = props;

  return (
    <S.Wrapper>
      <InputSection
        title={PASSWORD.title}
        description={PASSWORD.description}
        inputTitle={PASSWORD.inputTitle}
      >
        <Label htmlFor={'password'} />
        <Input
          id="password"
          maxLength={MAX_LENGTH.PASSWORD}
          onChange={onChange}
          isError={isError}
          type="password"
          ref={ref}
          value={value}
          onBlur={onBlur}
        />
      </InputSection>
      <S.ErrorContainer>
        <S.ErrorMessageSpan>{isError && PASSWORD.errorMessage}</S.ErrorMessageSpan>
      </S.ErrorContainer>
    </S.Wrapper>
  );
});

export default RegisterPassword;
