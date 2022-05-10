import PropTypes from "prop-types";
import { CARD_SIZE } from "constant";
import {
  CardWrapper,
  CardTop,
  CardMiddle,
  CardBottom,
  CardText,
  CardNumber,
  CardInfo,
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
  nickname,
}) {
  return (
    <>
      <CardWrapper size={size} color={color} onClick={onClick}>
        <CardTop>
          <CardText>{company}</CardText>
        </CardTop>
        <CardMiddle size={size}>
          <div />
        </CardMiddle>
        <CardBottom>
          <CardNumber>
            <CardText>
              {cardNumbers
                .map((number, index) =>
                  index > 1 ? "•".repeat(number.length) : number
                )
                .join(" ")}
            </CardText>
          </CardNumber>
          <CardInfo>
            <CardOwner>{owner}</CardOwner>
            <CardText>
              {dueMonth}/{dueYear}
            </CardText>
          </CardInfo>
        </CardBottom>
      </CardWrapper>
      {nickname && size === CARD_SIZE.SMALL && <div>{nickname}</div>}
    </>
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
  nickname: PropTypes.string,
};

export default Card;
