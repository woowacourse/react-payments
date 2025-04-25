import * as S from './CardInfoSection.styles';
import { ErrorProps } from '../../../shared/model/types';
import CustomInput from '../../../shared/ui/CustomInput';
import { useRef } from 'react';

const inputArr = [
  { type: 'text', placeholder: '1234', name: 'cardNumber-0' },
  { type: 'text', placeholder: '1234', name: 'cardNumber-1' },
  { type: 'text', placeholder: '1234', name: 'cardNumber-2' },
  { type: 'text', placeholder: '1234', name: 'cardNumber-3' },
];

export default function CardNumberSection({
  error,
  onChange,
}: {
  error: ErrorProps;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const isError = error && error['cardNumberError'].errorIndex !== -1 && error['cardNumberError'].errorMessage !== '';
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    onChange(e);

    if (e.target.value.length === 4 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <S.CardInfoMainSection>
      <div>
        <S.CardInfoTitle>결제할 카드 번호를 입력해 주세요</S.CardInfoTitle>
        <S.CardInfoDescription>본인 명의의 카드만 결제 가능합니다.</S.CardInfoDescription>
      </div>
      <S.CardInfoSubSection>
        <S.CardInfoSubTitle>카드 번호</S.CardInfoSubTitle>
        <S.CardInfoInputContainer>
          {inputArr.map((input, index: number) => (
            <CustomInput
              key={`cardNumber-custom-input-${index}`}
              {...input}
              onChange={(e) => handleInputChange(e, index)}
              maxLength={4}
              error={isError && error['cardNumberError'].errorIndex === index}
              ref={(el: HTMLInputElement | null) => {
                inputRefs.current[index] = el;
              }}
            />
          ))}
        </S.CardInfoInputContainer>
        <S.CardInfoError>{error && error['cardNumberError'].errorMessage}</S.CardInfoError>
      </S.CardInfoSubSection>
    </S.CardInfoMainSection>
  );
}
