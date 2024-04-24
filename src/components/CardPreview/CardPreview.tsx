import * as S from './CardPreview.style';

type CreditCardProps = {
  isFlip: boolean;
  cardNumbers: string[];
  month: string;
  year: string;
  name: string;
  cvc: string;
  cardImageSrc: string;
  cardColor: string;
};

export default function CardPreview({
  isFlip,
  cardNumbers,
  month,
  year,
  name,
  cvc,
  cardImageSrc,
  cardColor,
}: CreditCardProps) {
  return (
    <S.Container>
      <S.CardContainer $bgColor={cardColor}>
        <S.Front $isFlip={isFlip}>
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
        </S.Front>
        <S.Back $isFlip={isFlip}>
          <S.MagneticStripe>
            <S.CVCNumber>{cvc}</S.CVCNumber>
          </S.MagneticStripe>
        </S.Back>
      </S.CardContainer>
    </S.Container>
  );
}
