import * as S from './creditCard.style';

type CvcCardProps = {
  cvc: string;
};

export default function CvcCard({ cvc }: CvcCardProps) {
  return (
    <S.Container>
      <S.CardContainer $backgroundColor={'rgba(213, 213, 213, 1)'}>
        <S.CvcNumberWrapper $backgroundColor={'rgba(203, 186, 100, 1)'}>
          <S.CvcNumberText>{cvc}</S.CvcNumberText>
        </S.CvcNumberWrapper>
      </S.CardContainer>
    </S.Container>
  );
}
