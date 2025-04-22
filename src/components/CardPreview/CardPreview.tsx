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
}

export default function CardPreview({ cardType, cardNumber, cardExpirationDate, selectedCompany }: CardPreviewProps) {
  const selectedCardColor = selectedCompany
    ? CARD_COMPANIES.find((company) => company.id === selectedCompany)?.color
    : '#333';

  return (
    <S.CardPreviewWrapper backgroundColor={selectedCardColor}>
      <S.CardPreviewTop>
        <S.ICChip />
        {cardType === 'visa' && <VisaCard width={36} />}
        {cardType === 'master' && <MasterCard width={36} />}
      </S.CardPreviewTop>
      <S.CardPreviewMiddle>
        <S.CardPreviewNumber>{cardNumber.first}</S.CardPreviewNumber>
        <S.CardPreviewNumber>{cardNumber.second}</S.CardPreviewNumber>
        <S.CardPreviewNumber>{Array.from({ length: cardNumber.third.length }, () => MASKING)}</S.CardPreviewNumber>
        <S.CardPreviewNumber>
          {Array.from({ length: cardNumber.fourth.length }, () => {
            return MASKING;
          })}
        </S.CardPreviewNumber>
      </S.CardPreviewMiddle>
      <div>
        <span>{`${cardExpirationDate.month}${cardExpirationDate.year && ' / '}${cardExpirationDate.year}`}</span>
      </div>
    </S.CardPreviewWrapper>
  );
}
