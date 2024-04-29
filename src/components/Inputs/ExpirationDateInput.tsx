import * as S from './common.style';
import { EXPIRATION_PERIOD } from '../../constants/cardSection';
import useInput from '../../hooks/useInput';
import InputSection from '../InputSection';
import Input from '../composables/Input';
import InputLabel from '../composables/InputLabel';
import { MAX_LENGTH } from '../../constants/rules';

interface Props {
  month: ReturnType<typeof useInput<HTMLInputElement>>;
  year: ReturnType<typeof useInput<HTMLInputElement>>;
  setNextContentDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ExpirationDateInput({ month, year, setNextContentDisplay }: Props) {
  const goYearStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === MAX_LENGTH.expirationDate) {
      year.ref.current?.focus();
    }
  };

  const goNextStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 2) {
      setNextContentDisplay(true);
    }
  };

  return (
    <S.Wrapper>
      <InputSection
        title={EXPIRATION_PERIOD.title}
        description={EXPIRATION_PERIOD.description}
        inputTitle={EXPIRATION_PERIOD.inputTitle}
      >
        <InputLabel htmlFor={'month'} description={'월 입력'} />
        <Input
          isAutoFocus={true}
          id={'month'}
          placeholder={'MM'}
          type="text"
          value={month.value}
          maxLength={MAX_LENGTH.expirationDate}
          onChange={(e) => {
            month.onChangeHandler(e);
            goYearStep(e);
          }}
          onBlur={month.onBlurHandler}
          isError={month.isError}
        />
        <InputLabel htmlFor={'year'} description={'년도 입력'} />
        <Input
          ref={year.ref}
          id={'year'}
          placeholder={'YY'}
          type="text"
          maxLength={MAX_LENGTH.expirationDate}
          value={year.value}
          onChange={(e) => {
            year.onChangeHandler(e);
            goNextStep(e);
          }}
          onBlur={year.onBlurHandler}
          isError={year.isError}
        />
      </InputSection>
      <S.ErrorWrapper>
        {month.isError ||
          (year.isError && (
            <S.ErrorMessage>
              {month.isError && year.isError && month.errorMessage}
              {!month.isError && year.isError && year.errorMessage}
              {month.isError && !year.isError && month.errorMessage}
            </S.ErrorMessage>
          ))}
      </S.ErrorWrapper>
    </S.Wrapper>
  );
}
