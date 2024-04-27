import * as S from './cvcCard.style';
import * as C from './index.style';

type CvcCardProps = {
  cvc: string;
};

export default function CvcCard({ cvc }: CvcCardProps) {
  return (
    <C.Container>
      <C.CardContainer $backgroundColor={'rgba(213, 213, 213, 1)'}>
        <S.CvcNumberWrapper $backgroundColor={'rgba(203, 186, 100, 1)'}>
          <S.CvcNumberText>{cvc}</S.CvcNumberText>
        </S.CvcNumberWrapper>
      </C.CardContainer>
    </C.Container>
  );
}
