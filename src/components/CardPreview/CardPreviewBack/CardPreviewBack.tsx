import * as S from "./style";

interface Props {
  cardCVC: string;
}

export default function CardPreviewBack({ cardCVC }: Props) {
  return (
    <S.CardContainer>
      <S.CardCVCContainer>
        <S.PreviewText>{cardCVC}</S.PreviewText>
      </S.CardCVCContainer>
    </S.CardContainer>
  );
}
