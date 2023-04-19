import styled from "styled-components";
import { Card } from "../../types";

type CardPreviewProps = {
  card: Card;
};

const CardPreview = ({ card }: CardPreviewProps) => {
  const { number, ownerName, expirationDate } = card;

  return (
    <CardLayout>
      <ICChip></ICChip>
      <NumberContainer>
        <span>{number.firstGroup}</span>
        <span>{number.firstGroup}</span>
        <span>{"•".repeat(number.thirdGroup.length)}</span>
        <span>{"•".repeat(number.fourthGroup.length)}</span>
      </NumberContainer>
      <InfoContainer>
        <span>{ownerName ? ownerName : "NAME"}</span>
        <span>
          {expirationDate.month ? expirationDate.month : "MM"} / {expirationDate.year ? expirationDate.year : "YY"}
        </span>
      </InfoContainer>
    </CardLayout>
  );
};

export default CardPreview;

const CardLayout = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;

  background-color: #333333;

  height: 133px;
  width: 213px;

  border-radius: 5px;
  padding: 14px;

  font-size: 14px;
  color: white;
`;

const ICChip = styled.div`
  position: absolute;
  background-color: #cbba64;

  height: 26px;
  width: 40px;

  top: 47px;
  left: 14px;

  border-radius: 4px;
`;
const NumberContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;

  span {
    text-align: center;
    width: 40px;
    letter-spacing: 2px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0px 4px;

  font-size: 12px;
`;
