import { CARD_COMPANIES, MASKING } from '@/constants';
import { useTheme } from '@emotion/react';
import {
  CardCompanyType,
  CardCVCNumberInputType,
  CardExpirationDateInputType,
  CardNumberInputType,
  CardType,
} from '@/types';
import MasterCard from '../icons/MasterCard';
import VisaCard from '../icons/VisaCard';
import * as S from './CardPreview.styles';

interface CardPreviewProps {
  cardType: CardType;
  cardNumber: CardNumberInputType;
  cardExpirationDate: CardExpirationDateInputType;
  selectedCompany: CardCompanyType;
  cardCVCNumber: CardCVCNumberInputType;
  isFlipped: boolean;
}

export default function CardPreview({
  cardType,
  cardNumber,
  cardExpirationDate,
  selectedCompany,
  cardCVCNumber,
  isFlipped,
}: CardPreviewProps) {
  const theme = useTheme();
  const selectedCardColor = selectedCompany
    ? CARD_COMPANIES.find((company) => company.id === selectedCompany)?.color
    : theme.colors.card.default;

  return (
    <S.CardPreviewContainer>
      <S.CardPreviewWrapper backgroundColor={selectedCardColor} isFlipped={isFlipped}>
        <S.CardFront>
          <S.CardPreviewTop>
            <S.ICChip />
            {cardType === 'visa' && <VisaCard width={36} />}
            {cardType === 'master' && <MasterCard width={36} />}
          </S.CardPreviewTop>
          <S.CardPreviewMiddle>
            <S.CardPreviewNumber>{cardNumber.first}</S.CardPreviewNumber>
            <S.CardPreviewNumber>{cardNumber.second}</S.CardPreviewNumber>
            <S.CardPreviewNumber>
              {Array.from({ length: cardNumber.third.length }, () => MASKING).join('')}
            </S.CardPreviewNumber>
            <S.CardPreviewNumber>
              {Array.from({ length: cardNumber.fourth.length }, () => MASKING).join('')}
            </S.CardPreviewNumber>
          </S.CardPreviewMiddle>
          <div>
            <span>{`${cardExpirationDate.month}${cardExpirationDate.year && ' / '}${cardExpirationDate.year}`}</span>
          </div>
        </S.CardFront>
        <S.CardBack>
          <S.MagneticStrip />
          <S.CVCWrapper>
            <S.CVCStrip>
              <span>{cardCVCNumber.cvc || 'CVC'}</span>
            </S.CVCStrip>
          </S.CVCWrapper>
        </S.CardBack>
      </S.CardPreviewWrapper>
    </S.CardPreviewContainer>
  );
}
