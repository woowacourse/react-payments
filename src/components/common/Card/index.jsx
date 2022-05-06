import {
  CardWrapper,
  CardTop,
  CardMiddle,
  CardBottom,
  CardText,
  CardBottomNumber,
  CardBottomInfo,
  CardOwner,
} from 'components/common/Card/style'

function Card({ size, cardInfo }) {
  const { company, cardNumber, owner, dueDate } = cardInfo
  const month = dueDate.month || 'MM'
  const year = dueDate.year || 'YY'
  const ownerName = owner || 'NAME'

  return (
    <CardWrapper size={size}>
      <CardTop>
        <CardText>{company}카드</CardText>
      </CardTop>
      <CardMiddle size={size}></CardMiddle>
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
