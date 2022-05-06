import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CardDataContext } from "../../provider/CardDataProvider";
import Card from "../common/Card/card.component";

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
  const navigate = useNavigate();

  const handleEditCard = (e, idx) => {
    navigate(`add/${idx}`);
  };

  return (
    <>
      {cardData.map((cardDatum, idx) => (
        <div key={idx}>
          <Card onClick={(e) => handleEditCard(e, idx)} {...cardDatum} />
          <CardNameText>{cardDatum.cardName}</CardNameText>
        </div>
      ))}
    </>
  );
};

export default SavedCardList;
