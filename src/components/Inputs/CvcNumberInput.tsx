import * as S from './common.style';
import { CVC_NUMBER } from '../../constants/cardSection';
import { UseInputReturn } from '../../hooks/useInput';
import InputSection from '../InputSection';
import Input from '../composables/Input';
import InputLabel from '../composables/InputLabel';
import { MAX_LENGTH } from '../../constants/rules';

interface Props {
  cvc: UseInputReturn<HTMLInputElement>;
  setNextContentDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFlip: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CvcNumberInput({ cvc, setNextContentDisplay, setIsFlip }: Props) {
  const goNextStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === MAX_LENGTH.cvcNumber) {
      setNextContentDisplay(true);
    }
  };

  return (
    <S.Wrapper>
      <InputSection title={CVC_NUMBER.title} inputTitle={CVC_NUMBER.inputTitle}>
        <InputLabel htmlFor={'cvc'} description={'CVC 번호 입력'} />
        <Input
          isAutoFocus={true}
          id="cvc"
          maxLength={MAX_LENGTH.cvcNumber}
          onChange={(e) => {
            cvc.onChangeHandler(e);
            goNextStep(e);
          }}
          onBlur={(e) => {
            cvc.onBlurHandler(e);
            setIsFlip(false);
          }}
          isError={cvc.isError}
          placeholder={CVC_NUMBER.placeholder}
          onFocus={() => {
            setIsFlip(true);
          }}
          type="text"
          value={cvc.value}
        />
      </InputSection>
      <S.ErrorWrapper>
        {cvc.isError && <S.ErrorMessage>{cvc.errorMessage}</S.ErrorMessage>}
      </S.ErrorWrapper>
    </S.Wrapper>
  );
}
