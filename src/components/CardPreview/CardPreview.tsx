import { useEffect } from "react";
import styled from "styled-components";
import CardText from "./CardText";
import CardNumberDisplay from "./CardNumberDisplay";
import ExpirationDateDisplay from "./ExpirationDateDisplay";

import { CardInfo } from "../../types/card";

import useCardLogo from "../../hooks/useCardLogo";

interface CardPreviewProps {
  cardInfo: CardInfo;
}

const CardPreview = ({ cardInfo }: CardPreviewProps) => {
  const { cardNumbers, expirationDate, cardOwner } = cardInfo;

  const { logoPath, handleCardLogo } = useCardLogo();

  useEffect(() => {
    handleCardLogo(cardNumbers[0]);
  }, [cardNumbers, handleCardLogo]);

  return (
    <StyledCardPreview>
      <StyledDiv>
        <StyledChip />
        {logoPath && <StyledLogo src={logoPath} />}
      </StyledDiv>
      <CardInfoContainer>
        <CardNumberDisplay cardNumbers={cardNumbers} />
        <ExpirationDateDisplay expirationDate={expirationDate} />
        <CardText type="longText" text={cardOwner} />
      </CardInfoContainer>
    </StyledCardPreview>
  );
};

export default CardPreview;

const StyledCardPreview = styled.div`
  height: 132px;
  width: 212px;

  color: #ffffff;
  border-radius: 4px;
  background-color: #333333;
  box-shadow: 3px 3px 5px 0px #00000040;

  margin: 0 auto;
  margin-top: 60px;
`;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 17px;

  row-gap: 8px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
`;

const StyledChip = styled.div`
  height: 22px;
  width: 36px;

  border-radius: 4px;
  background-color: #ddcd78;
`;

const StyledLogo = styled.img`
  height: 22px;
  width: 36px;
`;
