import * as S from './CardInfoSection.styles';
import { ErrorProps } from '../../../shared/model/types';

const cardIssuers = ['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'];

export default function CardSelection({
  cardIssuer,
  error,
  onBlur,
  selectRef,
  onComplete,
}: {
  cardIssuer: string;
  error: ErrorProps;
  onBlur: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  selectRef: React.Ref<HTMLSelectElement>;
  onComplete: () => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onBlur(e);
    onComplete?.();
  };
  return (
    <S.CardInfoMainSection>
      <div>
        <S.CardInfoTitle>카드사를 입력해 주세요</S.CardInfoTitle>
        <S.CardInfoDescription>현재 국내 카드사만 가능합니다.</S.CardInfoDescription>
      </div>
      <S.CardInfoSubSection>
        <S.CardInfoInputContainer>
          {
            <S.CardSelection value={cardIssuer} onChange={handleChange} name='cardIssuer' ref={selectRef}>
              <option value='' disabled hidden>
                카드사를 선택해주세요
              </option>
              {cardIssuers.map((cardIssuer, index) => (
                <option key={`${cardIssuer}-${index}`} value={cardIssuer}>
                  {cardIssuer}
                </option>
              ))}
            </S.CardSelection>
          }
        </S.CardInfoInputContainer>
        <S.CardInfoError>{error && error['cardNumberError'].errorMessage}</S.CardInfoError>
      </S.CardInfoSubSection>
    </S.CardInfoMainSection>
  );
}
