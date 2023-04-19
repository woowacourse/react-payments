import styled from "styled-components";
import { IcChip } from "../assets";

interface CardType {
  color: string;
  name: string;
  expiredDate: number;
  cardNumber: number;
}

const Card = (props: CardType) => {
  return (
    <CardWrapper style={{ background: props.color }}>
      <img src={IcChip} alt="ic-chip" />
      <CardInfoWrapper>
        <span>{props.cardNumber}</span>
        <div>
          <span>{props.name}</span>
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

  font-size: 14px;
  font-weight: 600;
  color: white;

  padding: 8px 5px;
  box-sizing: border-box;
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

export default Card;
