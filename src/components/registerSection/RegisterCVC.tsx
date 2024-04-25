import InputSection from './InputSection';
import * as S from '../../app.style';
import Input from '../composables/Input';
import Label from '../composables/Label';
import { MAX_LENGTH } from '../../App';
import { forwardRef } from 'react';
import { CARD_CVC } from '../../constants/cardSection';
import { RegisterStepProps } from 'types';

const RegisterCVC = forwardRef<HTMLInputElement, RegisterStepProps>((props, ref) => {
  const { value, onChange, isError, onEnter, onBlur } = props;

  return (
    <S.Wrapper>
      <InputSection title={CARD_CVC.title} inputTitle={CARD_CVC.inputTitle}>
        <Label htmlFor={'cvc'} />
        <Input
          id={'cvc'}
          placeholder={'123'}
          type="text"
          value={value}
          maxLength={MAX_LENGTH.CVC}
          onChange={onChange}
          isError={isError}
          onKeyDown={onEnter}
          ref={ref}
          onBlur={onBlur}
        />
      </InputSection>
      <S.ErrorContainer>
        <S.ErrorMessageSpan>{isError && CARD_CVC.errorMessage}</S.ErrorMessageSpan>
      </S.ErrorContainer>
    </S.Wrapper>
  );
});

export default RegisterCVC;
