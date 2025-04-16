import styled from "styled-components";
import cardBrandLogo from "../constants/cardBrandLogo";
import { CardInputProps } from "../types/CardInputTypes";

interface CardProps {
  cardNumber: CardInputProps | null;
  cardType: "visa" | "mastercard";
}

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

const CardInformation = styled.div`
  color: var(--color-white);
  font-size: var(--font-size-subheader);
  font-weight: var(--font-weight-caption);
  letter-spacing: 2.56px;
  min-width: 40px;
`;

const CardNumberContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const Card = ({ cardNumber, cardType }: CardProps) => {
  return (
    <CardContainer>
      <ChipContainer>
        <CardGoldChip />
        <CardBrandLogo src={cardBrandLogo[cardType]} />
      </ChipContainer>
      {cardNumber && (
        <>
          <CardNumberContainer>
            <CardInformation>{cardNumber.first}</CardInformation>
            <CardInformation>{cardNumber.second}</CardInformation>
            <CardInformation>{cardNumber.third}</CardInformation>
            <CardInformation>{cardNumber.fourth}</CardInformation>
          </CardNumberContainer>

          {cardNumber.MM && cardNumber.YY && (
            <CardInformation>
              {cardNumber.MM}/{cardNumber.YY}
            </CardInformation>
          )}
        </>
      )}
    </CardContainer>
  );
};

export default Card;
