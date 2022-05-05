import PropTypes from "prop-types";
import {
  CardWrapper,
  CardTop,
  CardMiddle,
  CardBottom,
  CardText,
  CardBottomNumber,
  CardBottomInfo,
  CardOwner,
} from "./style";

function Card({
  size,
  color,
  company,
  cardNumbers,
  owner,
  dueMonth,
  dueYear,
  onClick,
}) {
  return (
    <CardWrapper size={size} color={color} onClick={onClick}>
      <CardTop>
        <CardText>{company}</CardText>
      </CardTop>
      <CardMiddle size={size}>
        <div></div>
      </CardMiddle>
      <CardBottom>
        <CardBottomNumber>
          <CardText>
            {cardNumbers
              .map((number, index) =>
                index > 1 ? "•".repeat(number.length) : number
              )
              .join(" ")}
          </CardText>
        </CardBottomNumber>
        <CardBottomInfo>
          <CardOwner>{owner}</CardOwner>
          <CardText>
            {dueMonth}/{dueYear}
          </CardText>
        </CardBottomInfo>
      </CardBottom>
    </CardWrapper>
  );
}

Card.propTypes = {
  /**
   * 카드 크기 타입
   */
  size: PropTypes.string,
  /**
   * 카드사
   */
  company: PropTypes.string,
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
  onClick: PropTypes.func,
};

export default Card;
