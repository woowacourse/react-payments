import styled from "styled-components";
import { shrinkLeftToRight } from "../style/keyframe";
import { CardType } from "../types";
import Card from "./Card";

interface LoadingType {
  card: CardType;
}

const CardLoading = ({ card }: LoadingType) => {
  return (
    <LoadingWrapper>
      <CardWrapper>
        <Card {...card} />
      </CardWrapper>
      <BoxWrapper />
      <p>카드를 만들고 있어요...</p>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  align-items: center;
  justify-content: center;
  margin-top: 7rem;

  & > P {
    margin-top: 40px;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    color: #575757;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  width: max-content;
  height: 160px;

  position: absolute;
  top: 0;

  background: white;
  animation: ${shrinkLeftToRight} 2.5s linear;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 230px;
  height: 140px;
`;

export default CardLoading;
