import PropTypes from 'prop-types';
import {CardWrapper, CardTop, CardMiddle, CardBottom, CardText, CardBottomNumber, CardBottomInfo} from "./style";

function Card({size, company, cardNumbers, owner, dueMonth, dueDate}) {
  return (
    <CardWrapper size={size}>
       <CardTop>
          <CardText>{company}카드</CardText>
       </CardTop>
        <CardMiddle size={size}>
          <div></div>
        </CardMiddle>
        <CardBottom>
          <CardBottomNumber>
            <CardText>{cardNumbers.map(number => number).join(" ")}</CardText>
          </CardBottomNumber>
          <CardBottomInfo>
            <CardText>{owner}</CardText>
            <CardText>{dueMonth} / {dueDate}</CardText>
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
   * 카드번호(첫번째)
   */
  firstNumber: PropTypes.string,
  /**
   * 카드번호(두번째)
   */
  secondNumber: PropTypes.string,
  /**
   * 카드번호(세번째)
   */
  thirdNumber: PropTypes.string,
  /**
   * 카드번호(네번째)
   */
   fourthNumber: PropTypes.string,
  /**
   * 소유자
   */
  owner: PropTypes.string,
  /**
   * 만료일(월)
   */
  dueMonth: PropTypes.string,
  /**
   * 만료일(일)
   */
  dueDate: PropTypes.string
}
 

export default Card