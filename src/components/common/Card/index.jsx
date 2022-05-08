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

import { CARD_COMPANY } from 'constant'

function Card({ size, cardInfo }) {
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
