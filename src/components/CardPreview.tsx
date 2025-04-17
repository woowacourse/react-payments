import * as S from './CardPreview.styles'
import MasterCard from './logo/MasterCard'
import VisaCard from './logo/VisaCard'

interface CardPreviewProps {
  cardType: 'visa' | 'master' | ''
  cardNumber: Record<string, string>
  cardExpirationDate: Record<string, string>
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
        <span>{cardNumber.first}</span>
        <span>{cardNumber.second}</span>
        <span>
          {Array.from({ length: cardNumber.third.length }, () => {
            return '·'
          })}
        </span>
        <span>
          {Array.from({ length: cardNumber.fourth.length }, () => {
            return '·'
          })}
        </span>
      </S.CardPreviewMiddle>
      <div>
        <span>{`${cardExpirationDate.month}${cardExpirationDate.year && ' / '}${cardExpirationDate.year}`}</span>
      </div>
    </S.CardPreviewWrapper>
  )
}
