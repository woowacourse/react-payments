import * as S from './CardPreview.styles';
import MasterCard from './logo/MasterCard';
import VisaCard from './logo/VisaCard';
import { MASKING } from '../constants';
import { CardType, SequenceType, DateType } from '../types';

interface CardPreviewProps {
  cardType: CardType;
  cardNumber: Record<SequenceType, string>;
  cardExpirationDate: Record<DateType, string>;
}

export default function CardPreview({ cardType, cardNumber, cardExpirationDate }: CardPreviewProps) {
  return (
    <S.CardPreviewWrapper>
      <S.CardPreviewTop>
        <S.ICChip />
        {cardType === 'visa' && <VisaCard width={36} />}
        {cardType === 'master' && <MasterCard width={36} />}
        {cardType === 'etc' && <span>Other Card</span>}
      </S.CardPreviewTop>
      <S.CardPreviewMiddle>
        <span>{cardNumber.first}</span>
        <span>{cardNumber.second}</span>
        <span>{Array.from({ length: cardNumber.third.length }, () => MASKING)}</span>
        <span>
          {Array.from({ length: cardNumber.fourth.length }, () => {
            return MASKING;
          })}
        </span>
      </S.CardPreviewMiddle>
      <div>
        <span>{`${cardExpirationDate.month}${cardExpirationDate.year && ' / '}${cardExpirationDate.year}`}</span>
      </div>
    </S.CardPreviewWrapper>
  );
}
