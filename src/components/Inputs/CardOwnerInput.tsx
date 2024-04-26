import * as S from './common.style';
import { OWNER_NAME } from '../../constants/cardSection';
import { UseInputReturn } from '../../hooks/useInput';
import InputSection from '../InputSection';
import Input from '../composables/Input';
import ScreenReaderOnlyLabel from '../composables/ScreenReaderOnlyLabel';
import { MAX_LENGTH } from '../../constants/rules';

interface Props {
  name: UseInputReturn<HTMLInputElement>;
  setNextContentDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardOwnerInput({ name, setNextContentDisplay }: Props) {
  const goNextStep = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {
    if (value !== '' && e.key === 'Enter') {
      setNextContentDisplay(true);
    }
  };

  return (
    <S.Wrapper>
      <InputSection title={OWNER_NAME.title} inputTitle={OWNER_NAME.inputTitle}>
        <ScreenReaderOnlyLabel htmlFor={'name'} description={'이름 입력'} />
        <Input
          isAutoFocus={true}
          ref={name.ref}
          id="name"
          maxLength={MAX_LENGTH.ownerName}
          onChange={name.onChangeHandler}
          onKeyDown={(e) => goNextStep(e, name.value)}
          onBlur={name.onBlurHandler}
          isError={name.isError}
          placeholder="JOHN DOE"
          type="text"
          value={name.value.toUpperCase()}
        />
      </InputSection>
      <S.ErrorWrapper>
        <S.ErrorMessage>{name.isError && name.errorMessage}</S.ErrorMessage>
      </S.ErrorWrapper>
    </S.Wrapper>
  );
}
