import * as S from "./style";

interface Props {
  cardInformation: CardInformation;
}

export default function CardPreviewBack({ cardInformation }: Props) {
  return (
    <S.CardContainer>
      <S.CardCVCContainer>
        <S.PreviewText>{cardInformation.cardCVC.value}</S.PreviewText>
      </S.CardCVCContainer>
    </S.CardContainer>
  );
}
