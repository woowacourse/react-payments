import * as S from './CardInfoSection.styles';
import { ErrorProps } from '../../../shared/model/types';
import CustomInput from '../../../shared/ui/CustomInput';

const inputArr = [
  { type: 'text', placeholder: 'MM', name: 'cardExpirationDate-month' },
  { type: 'text', placeholder: 'YY', name: 'cardExpirationDate-year' },
];

export default function CardExpirationDateSection({
  error,
  onChange,
}: {
  error: ErrorProps;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const isError =
    error && error['cardExpirationDateError'].errorIndex !== -1 && error['cardExpirationDateError'].errorMessage !== '';

  return (
    <S.CardInfoMainSection>
      <div>
        <S.CardInfoTitle>카드 유효기간을 입력해 주세요</S.CardInfoTitle>
        <S.CardInfoDescription>월/년도(MMYY)를 순서대로 입력해 주세요.</S.CardInfoDescription>
      </div>
      <S.CardInfoSubSection>
        <S.CardInfoSubTitle>유효기간</S.CardInfoSubTitle>
        <S.CardInfoInputContainer>
          {inputArr.map((input, index: number) => (
            <CustomInput
              key={`cardExpirationDate-custom-input-${index}`}
              {...input}
              onChange={onChange}
              maxLength={2}
              error={isError && error['cardExpirationDateError'].errorIndex === index}
            />
          ))}
        </S.CardInfoInputContainer>
        <S.CardInfoError>{error && error['cardExpirationDateError'].errorMessage}</S.CardInfoError>
      </S.CardInfoSubSection>
    </S.CardInfoMainSection>
  );
}
