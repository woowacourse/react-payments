import uuid from "react-uuid";
import styled from "styled-components";
import { IcChip } from "../assets";
import { CardType } from "../types";

const Card = (props: CardType) => {
  const cardNumberArray = props.cardNumber.replaceAll(" - ", " ").split(" ");

  return (
    <CardWrapper style={{ background: props.color }}>
      <img src={IcChip} alt="ic-chip" />
      <CardInfoWrapper>
        <div>
          {cardNumberArray.map((cardNumber, index) => {
            return index > 1 ? (
              <span key={uuid()} style={{ letterSpacing: "-3px" }}>
                {cardNumber}
              </span>
            ) : (
              <span key={uuid()} style={{ letterSpacing: "3px" }}>
                {cardNumber}
              </span>
            );
          })}
        </div>
        <div>
          <span>{props.ownerName}</span>
          <span>{props.expiredDate}</span>
        </div>
      </CardInfoWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  width: 208px;
  height: 123px;

  box-sizing: border-box;

  padding: 40px 14px 0 14px;
  border-radius: 5px;

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 55px;

  font-size: 15px;
  font-weight: 600;
  color: white;

  padding: 8px 5px;
  box-sizing: border-box;

  & > div {
    display: flex;
    justify-content: space-between;

    & > span {
      font-weight: 900;
    }
  }
`;

export default Card;
