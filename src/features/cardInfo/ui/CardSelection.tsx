import * as S from './CardInfoSection.styles';
import { ErrorProps } from '../../../shared/model/types';

export default function CardSelection({
  cardIssuer,
  error,
  onBlur,
}: {
  cardIssuer: string;
  error: ErrorProps;
  onBlur: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}) {
  return (
    <S.CardInfoMainSection>
      <div>
        <S.CardInfoTitle>카드사를 입력해 주세요</S.CardInfoTitle>
        <S.CardInfoDescription>현재 국내 카드사만 가능합니다.</S.CardInfoDescription>
      </div>
      <S.CardInfoSubSection>
        <S.CardInfoInputContainer>
          {
            <S.CardSelection value={cardIssuer} onChange={onBlur} name='cardIssuer'>
              <option value='' disabled hidden>
                카드사를 선택해주세요
              </option>
              <option value='BC카드'>BC카드</option>
              <option value='신한카드'>신한카드</option>
              <option value='카카오뱅크'>카카오뱅크</option>
              <option value='현대카드'>현대카드</option>
              <option value='우리카드'>우리카드</option>
              <option value='롯데카드'>롯데카드</option>
              <option value='하나카드'>하나카드</option>
              <option value='국민카드'>국민카드</option>
            </S.CardSelection>
          }
        </S.CardInfoInputContainer>
        <S.CardInfoError>{error && error['cardNumberError'].errorMessage}</S.CardInfoError>
      </S.CardInfoSubSection>
    </S.CardInfoMainSection>
  );
}
