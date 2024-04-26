import * as S from './common.style';
import { EXPIRATION_PERIOD } from '../../constants/cardSection';
import { UseInputReturn } from '../../hooks/useInput';
import InputSection from '../InputSection';
import Input from '../composables/Input';
import ScreenReaderOnlyLabel from '../composables/ScreenReaderOnlyLabel';

interface Props {
  month: UseInputReturn<HTMLInputElement>;
  year: UseInputReturn<HTMLInputElement>;
  setNextContentDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ExpirationDateInput({ month, year, setNextContentDisplay }: Props) {
  return (
    <S.Wrapper>
      <InputSection
        title={EXPIRATION_PERIOD.title}
        description={EXPIRATION_PERIOD.description}
        inputTitle={EXPIRATION_PERIOD.inputTitle}
      >
        <ScreenReaderOnlyLabel htmlFor={'month'} description={'월 입력'} />
        <Input
          isAutoFocus={true}
          ref={month.ref}
          id={'month'}
          placeholder={'MM'}
          type="text"
          value={month.value}
          maxLength={2}
          onChange={(e) => {
            month.onChangeHandler(e);
            if (e.target.value.length === 2) {
              year.ref.current?.focus();
            }
          }}
          onBlur={month.onBlurHandler}
          isError={month.isError}
        />
        <ScreenReaderOnlyLabel htmlFor={'year'} description={'년도 입력'} />
        <Input
          ref={year.ref}
          id={'year'}
          placeholder={'YY'}
          type="text"
          maxLength={2}
          value={year.value}
          onChange={(e) => {
            year.onChangeHandler(e);
            if (e.target.value.length === 2) {
              setNextContentDisplay(true);
            }
          }}
          onBlur={year.onBlurHandler}
          isError={year.isError}
        />
      </InputSection>
      <S.ErrorWrapper>
        <S.ErrorMessage>
          {month.isError && year.isError && month.errorMessage}
          {!month.isError && year.isError && year.errorMessage}
          {month.isError && !year.isError && month.errorMessage}
        </S.ErrorMessage>
      </S.ErrorWrapper>
    </S.Wrapper>
  );
}
