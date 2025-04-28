import * as S from './CardInfoSection.styles';
import { ErrorProps } from '../../../shared/model/types';
import CustomInput from '../../../shared/ui/CustomInput';
import { useRef } from 'react';

const inputArr = [
  { type: 'text', placeholder: 'MM', name: 'cardExpirationDate-month' },
  { type: 'text', placeholder: 'YY', name: 'cardExpirationDate-year' },
];

export default function CardExpirationDateSection({
  error,
  onBlur,
  selectRef,
  onComplete,
}: {
  error: ErrorProps;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectRef: React.Ref<HTMLInputElement>;
  onComplete: () => void;
}) {
  const isError =
    error && error['cardExpirationDateError'].errorIndex !== -1 && error['cardExpirationDateError'].errorMessage !== '';
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const createInputRef = (index: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;

    if (index === 0 && selectRef) {
      if (typeof selectRef === 'function') {
        selectRef(el);
      } else if (selectRef && 'current' in selectRef) {
        (selectRef as React.RefObject<HTMLInputElement | null>).current = el;
      }
    }
  };

  const handleRef = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 2 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    } else if (e.target.value.length === 2 && !inputRefs.current[index + 1]) {
      onComplete?.();
    }
  };

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
              onBlur={onBlur}
              handleRef={handleRef(index)}
              ref={createInputRef(index)}
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
