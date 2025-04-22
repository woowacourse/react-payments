import * as S from './CardPreview.styles';
import MasterCard from '../icons/MasterCard';
import VisaCard from '../icons/VisaCard';
import { CardType, DateType, SequenceType, CardCompanyType } from '@/types';
import { MASKING, CARD_COMPANIES } from '@/constants';

interface CardPreviewProps {
  cardType: CardType;
  cardNumber: Record<SequenceType, string>;
  cardExpirationDate: Record<DateType, string>;
  selectedCompany: CardCompanyType | '';
  cardCVCNumber: string;
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
  const selectedCardColor = selectedCompany
    ? CARD_COMPANIES.find((company) => company.id === selectedCompany)?.color
    : '#333';

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
              <span>{cardCVCNumber || 'CVC'}</span>
            </S.CVCStrip>
          </S.CVCWrapper>
        </S.CardBack>
      </S.CardPreviewWrapper>
    </S.CardPreviewContainer>
  );
}
