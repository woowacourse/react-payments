import { InitialCardNumberState } from '../../hooks/useCardNumber';
import MasterCardImage from '../../assets/images/mastercard.png';
import VisaCardImage from '../../assets/images/visa.png';
import * as S from './creditCard.style';

type CreditCardProps = {
  cardNumbers: InitialCardNumberState[];
  month: string;
  year: string;
  name: string;
  cardBrand: 'none' | 'Visa' | 'MasterCard';
  backgroundColor: string;
};

const DATE_SEPARATOR = '/';

export default function CreditCard({
  cardNumbers,
  month,
  year,
  name,
  cardBrand,
  backgroundColor,
}: CreditCardProps) {
  const cardBrandImageSrc =
    cardBrand === 'MasterCard' ? MasterCardImage : cardBrand === 'Visa' ? VisaCardImage : '';

  return (
    <S.Container>
      <S.CardContainer $backgroundColor={backgroundColor} $padding={'8px 12px'}>
        <S.CardHeader>
          <S.CardHeaderContentWrapper>
            <S.IcChip />
          </S.CardHeaderContentWrapper>
          <S.CardHeaderContentWrapper>
            {cardBrandImageSrc ? (
              <S.CardBrand src={cardBrandImageSrc} alt={'cardBrandImage'} />
            ) : null}
          </S.CardHeaderContentWrapper>
        </S.CardHeader>
        <S.CardInfoWrapper>
          <S.NumbersContainer>
            <S.NumbersWrapper>
              <S.Text>{cardNumbers[0].value}</S.Text>
            </S.NumbersWrapper>
            <S.NumbersWrapper>
              <S.Text>{cardNumbers[1].value}</S.Text>
            </S.NumbersWrapper>
            <S.NumbersWrapper>
              {Array.from({ length: cardNumbers[2].value.length }).map((_, index) => (
                <S.Dot key={'third card section' + index} />
              ))}
            </S.NumbersWrapper>
            <S.NumbersWrapper>
              {Array.from({ length: cardNumbers[3].value.length }).map((_, index) => (
                <S.Dot key={'fourth card section' + index} />
              ))}
            </S.NumbersWrapper>
          </S.NumbersContainer>
          <S.Text>{month + `${month || year ? DATE_SEPARATOR : ''}` + year}</S.Text>
          <S.Text>{name}</S.Text>
        </S.CardInfoWrapper>
      </S.CardContainer>
    </S.Container>
  );
}
