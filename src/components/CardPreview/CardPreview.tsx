import * as S from './CardPreview.style';

type CreditCardProps = {
  cardNumbers: string[];
  month: string;
  year: string;
  name: string;
  cardImageSrc: string;
};

export default function CardPreview({
  cardNumbers,
  month,
  year,
  name,
  cardImageSrc,
}: CreditCardProps) {
  return (
    <S.Container>
      <S.CardContainer>
        <S.CardHeader>
          <S.CardHeaderContentWrapper>
            <S.IcChip />
          </S.CardHeaderContentWrapper>
          <S.CardHeaderContentWrapper>
            {cardImageSrc ? <S.CardBrand src={cardImageSrc} /> : null}
          </S.CardHeaderContentWrapper>
        </S.CardHeader>
        <S.CardInfoWrapper>
          <S.NumbersContainer>
            <S.NumbersWrapper>
              <S.Text>{cardNumbers[0]}</S.Text>
            </S.NumbersWrapper>
            <S.NumbersWrapper>
              <S.Text>{cardNumbers[1]}</S.Text>
            </S.NumbersWrapper>
            <S.NumbersWrapper>
              {Array.from({ length: cardNumbers[2].length }).map((_, index) => (
                <S.Dot key={'third card section' + index} />
              ))}
            </S.NumbersWrapper>
            <S.NumbersWrapper>
              {Array.from({ length: cardNumbers[3].length }).map((_, index) => (
                <S.Dot key={'fourth card section' + index} />
              ))}
            </S.NumbersWrapper>
          </S.NumbersContainer>
          <S.Text>{month + `${month || year ? '/' : ''}` + year}</S.Text>
          <S.Text>{name}</S.Text>
        </S.CardInfoWrapper>
      </S.CardContainer>
    </S.Container>
  );
}
