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

export interface CardWrapperProps {
  size: string;
  color: string;
}

interface CardProps extends CardWrapperProps {
  company: string;
  cardNumbers: string[];
  owner: string;
  dueMonth: string;
  dueYear: string;
  onClick: () => void;
  nickname: string;
}

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
}: CardProps) {
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

export default Card;
