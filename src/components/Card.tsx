import styled from "styled-components";
import { IcChip } from "../assets";
import { SEPERATOR_STRING } from "../constants";
import { CardType } from "../types";

const Card = ({ cardNumber, color, ownerName, expiredDate }: CardType) => {
  const cardNumberArray = cardNumber
    .replaceAll(SEPERATOR_STRING.cardNumber, " ")
    .split(" ");

  return (
    <CardWrapper style={{ background: color }}>
      <img src={IcChip} alt="ic-chip" />
      <CardInfoWrapper>
        <UpInfoWrapper>
          {cardNumberArray.map((cardNumber) => (
            <span key={crypto.randomUUID()}>{cardNumber}</span>
          ))}
        </UpInfoWrapper>
        <BottomInfoWrapper>
          <span>{ownerName}</span>
          <span>{expiredDate}</span>
        </BottomInfoWrapper>
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

  font-size: 14px;
  font-weight: 600;
  color: white;

  padding: 8px 5px;
  box-sizing: border-box;

  & > div > span {
    font-weight: 900;
    padding-right: 6px;
  }
`;

const UpInfoWrapper = styled.div`
  display: flex;
  max-width: max-content;
`;

const BottomInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
`;

export default Card;
