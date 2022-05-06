import { useContext } from "react";
import styled from "styled-components";
import { CardDataContext } from "../../provider/CardDataProvider";
import Card from "../common/Card/Card.component";

const CardNameText = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.cardText};
  text-align: center;
  opacity: 90%;
  margin-top: 5px;
`;

const SavedCardList = () => {
  const { cardData } = useContext(CardDataContext);
  return (
    <>
      {cardData.map((cardDatum, idx) => (
        <div key={idx}>
          <Card {...cardDatum} />
          <CardNameText>{cardDatum.cardName}</CardNameText>
        </div>
      ))}
    </>
  );
};

export default SavedCardList;
