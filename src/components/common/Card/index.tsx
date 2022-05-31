import {
  CardWrapper,
  CardTop,
  CardMiddle,
  CardBottom,
  CardText,
  CardBottomNumber,
  CardBottomInfo,
  CardOwner,
  Plus,
} from 'components/common/Card/style'

import { CARD_COMPANY } from 'constants/index'

interface DueDateType {
  month: string
  year: string
}

interface CardNumberType {
  first: string
  second: string
  third: string
  fourth: string
}

interface CardInfoType {
  company: string
  cardNumber: CardNumberType
  owner: string
  dueDate: DueDateType
}

interface CardType {
  size: 'small' | 'large'
  cardInfo: CardInfoType
}

function Card({ size = 'small', cardInfo }: CardType) {
  const { company, cardNumber, owner, dueDate } = cardInfo
  const month = dueDate.month || 'MM'
  const year = dueDate.year || 'YY'
  const ownerName = owner || 'NAME'

  return (
    <CardWrapper size={size} color={CARD_COMPANY[company]} border={!company}>
      <CardTop>
        <CardText>{company}카드</CardText>
      </CardTop>
      <CardMiddle size={size}>
        <div></div>
        {!company && <Plus>+</Plus>}
      </CardMiddle>
      <CardBottom>
        <CardBottomNumber>
          <CardText>
            {Object.entries(cardNumber)
              .map(([key, value]) => {
                if (key === 'first' || key === 'second') {
                  return value
                } else {
                  return '•'.repeat(value.length)
                }
              })
              .join(' ')}
          </CardText>
        </CardBottomNumber>
        <CardBottomInfo>
          <CardOwner>{ownerName}</CardOwner>
          <CardText>
            {month}/{year}
          </CardText>
        </CardBottomInfo>
      </CardBottom>
    </CardWrapper>
  )
}

export default Card
