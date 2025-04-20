import styled from "styled-components";
import cardBrandLogo from "../../constants/cardBrandLogo";
import type { CardInputProps } from "../../types/CardInputTypes";
import CardNumber from "../CardNumber";

interface CardProps {
  cardNumber: CardInputProps | null;
  cardType: "visa" | "mastercard" | "default";
}

const Card = ({ cardNumber, cardType }: CardProps) => {
  return (
    <CardContainer>
      <ChipContainer>
        <CardGoldChip />
        <CardBrandLogo src={cardBrandLogo[cardType]} />
      </ChipContainer>
      {cardNumber ? <CardNumber cardNumber={cardNumber} /> : null}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  box-sizing: border-box;
  width: 212px;
  height: 132px;
  background-color: var(--color-black);
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
`;

const ChipContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardGoldChip = styled.div`
  width: 36px;
  height: 22px;
  background-color: var(--color-yellow);
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.1);
`;

const CardBrandLogo = styled.img`
  width: 36px;
  height: 22px;
`;

export default Card;
