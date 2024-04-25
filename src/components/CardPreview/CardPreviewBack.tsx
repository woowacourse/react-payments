import * as S from './cardPreview.styles';

export interface ICardPreviewBackProps {
  cardType?: string;
  cvc: string;
}

export default function CardPreviewBack({ cardType, cvc }: ICardPreviewBackProps) {
  return (
    <S.CardPreviewContainer $cardType={cardType}>
      <S.CvcLine>
        <S.CvcText>{cvc}</S.CvcText>
      </S.CvcLine>
    </S.CardPreviewContainer>
  );
}
