import PropTypes from 'prop-types';
import {CardWrapper, CardTop, CardMiddle, CardBottom, CardText, CardBottomNumber, CardBottomInfo} from "./style";

function Card({size, company, cardNumbers, owner, dueDate}) {
  const {month, year} = dueDate;

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
            <CardText>{cardNumbers.map((number, index) => 
              index > 1 ? '•'.repeat(number.length): number
              ).join(" ")}</CardText>
          </CardBottomNumber>
          <CardBottomInfo>
            <CardText>{owner}</CardText>
            <CardText>{month}/{year}</CardText>
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
  dueDate: PropTypes.object
}
 
export default Card