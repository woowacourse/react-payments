import * as S from './CardInfoSection.styles';
import { ErrorProps } from '../../../shared/model/types';
import { useState } from 'react';

const inputArr = [
  { type: 'text', placeholder: '1234', name: 'cardNumber-0' },
  { type: 'text', placeholder: '1234', name: 'cardNumber-1' },
  { type: 'text', placeholder: '1234', name: 'cardNumber-2' },
  { type: 'text', placeholder: '1234', name: 'cardNumber-3' },
];

export default function CardSelection({
  error,
  onChange,
}: {
  error: ErrorProps;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [select, setSelect] = useState('');

  return (
    <S.CardInfoMainSection>
      <div>
        <S.CardInfoTitle>카드사를 입력해 주세요</S.CardInfoTitle>
        <S.CardInfoDescription>현재 국내 카드사만 가능합니다.</S.CardInfoDescription>
      </div>
      <S.CardInfoSubSection>
        <S.CardInfoInputContainer>
          {
            <select value={select} onChange={(e) => setSelect(e.target.value)}>
              <option value='국민'>테스트1</option>
              <option value='하나'>테스트2</option>
            </select>
          }
        </S.CardInfoInputContainer>
        <S.CardInfoError>{error && error['cardNumberError'].errorMessage}</S.CardInfoError>
      </S.CardInfoSubSection>
    </S.CardInfoMainSection>
  );
}
