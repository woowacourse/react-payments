import * as S from './common.style';
import { CVC_NUMBER } from '../../constants/cardSection';
import { UseInputReturn } from '../../hooks/useInput';
import InputSection from '../InputSection';
import Input from '../composables/Input';
import ScreenReaderOnlyLabel from '../composables/ScreenReaderOnlyLabel';

interface Props {
  cvc: UseInputReturn<HTMLInputElement>;
  setNextContentDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFlip: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CvcNumberInput({ cvc, setNextContentDisplay, setIsFlip }: Props) {
  return (
    <S.Wrapper>
      <InputSection title={CVC_NUMBER.title} inputTitle={CVC_NUMBER.inputTitle}>
        <ScreenReaderOnlyLabel htmlFor={'cvc'} description={'CVC 번호 입력'} />
        <Input
          isAutoFocus={true}
          ref={cvc.ref}
          id="cvc"
          maxLength={3}
          onChange={(e) => {
            cvc.onChangeHandler(e);
            if (e.target.value.length === 3) {
              setNextContentDisplay(true);
            }
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
        <S.ErrorMessage>{cvc.isError && cvc.errorMessage}</S.ErrorMessage>
      </S.ErrorWrapper>
    </S.Wrapper>
  );
}
