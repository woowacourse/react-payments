import * as S from './CardPreview.styles';
import MasterCard from '../logo/MasterCard';
import VisaCard from '../logo/VisaCard';
import { MASKING } from '../../constants';
import { CardType, SequenceType, DateType } from '../../types';

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
