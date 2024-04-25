import * as S from '../../app.style';
import Input from '../composables/Input';
import Label from '../composables/Label';
import InputSection from './InputSection';
import { forwardRef } from 'react';
import { MAX_LENGTH } from '../../App';
import { OWNER_NAME } from '../../constants/cardSection';
import { RegisterStepProps } from 'types';

const RegisterName = forwardRef<HTMLInputElement, RegisterStepProps>((props, ref) => {
  const { onChange, value, onEnter, isError, onBlur } = props;
  return (
    <S.Wrapper>
      <InputSection title={OWNER_NAME.title} inputTitle={OWNER_NAME.inputTitle}>
        <Label htmlFor={'name'} />
        <Input
          id="name"
          maxLength={MAX_LENGTH.NAME}
          onChange={onChange}
          isError={isError}
          placeholder="JOHN DOE"
          type="text"
          ref={ref}
          value={value}
          onKeyDown={onEnter}
          onBlur={onBlur}
        />
      </InputSection>
      <S.ErrorContainer>
        <S.ErrorMessageSpan>{isError && OWNER_NAME.errorMessage}</S.ErrorMessageSpan>
      </S.ErrorContainer>
    </S.Wrapper>
  );
});

export default RegisterName;
