import PropTypes from 'prop-types'
import { useContext } from 'react'

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
import CardInfoContext from 'store/cardInfo-context'

function Card({ size }) {
  const {
    cardInfo: { company, cardNumber, owner, dueDate },
  } = useContext(CardInfoContext)

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
          <CardOwner>{owner}</CardOwner>
          <CardText>
            {dueDate.month}/{dueDate.year}
          </CardText>
        </CardBottomInfo>
      </CardBottom>
    </CardWrapper>
  )
}

Card.propTypes = {
  /**
   * 카드사
   */
  company: PropTypes.string.isRequired,
  /**
   * 카드번호 배열
   */
  cardNumbers: PropTypes.array,
  /**
   * 소유자
   */
  owner: PropTypes.string,
  /**
   * 만료일
   */
  dueMonth: PropTypes.string,
  dueYear: PropTypes.string,
}

export default Card
