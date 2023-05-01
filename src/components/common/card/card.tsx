import { useContext } from "react";
import styled from "styled-components";
import { CardColor, CardInfo } from "../../../type/card";
import { CardNumberIndex } from "../../../type/input";

export interface CardProps extends CardInfo {}

export function Card(props: CardProps) {
  const { cardNumber, month, year, userName, cardColor, bank } = props;

  return (
    <CardContainer cardColor={cardColor}>
      <BankName>{bank}</BankName>
      <ICcard />
      <NumberWrapper>
        <NumberItem type="text">{cardNumber?.["first"]}</NumberItem>
        <NumberItem type="text">{cardNumber?.["second"]}</NumberItem>
        <NumberItem type="password">
          {"•".repeat(cardNumber?.["third"].length)}
        </NumberItem>
        <NumberItem type="password">
          {"•".repeat(cardNumber?.["fourth"].length)}
        </NumberItem>
      </NumberWrapper>
      <InfoWrapper>
        <Name>{userName}</Name>
        <Date>
          {month}/{year}
        </Date>
      </InfoWrapper>
    </CardContainer>
  );
}

const CardContainer = styled.section<{ cardColor: CardColor }>`
  display: flex;
  flex-direction: column;

  width: 21.3rem;
  height: 13.3rem;

  background-color: ${({ cardColor }) =>
    cardColor ? cardColor.bgColor : "gray"};
  color: ${({ cardColor }) => (cardColor ? cardColor.fontColor : "black")};
  ${({ theme }) => theme.fonts.card};

  border-radius: 0.5rem;
`;

const BankName = styled.h1`
  margin-top: 1rem;
  margin-left: 1.4rem;

  ${({ theme }) => theme.fonts.label}
`;

const ICcard = styled.div`
  width: 4rem;
  height: 2.6rem;

  margin-top: 2rem;
  margin-left: 1.4rem;

  background-color: ${({ theme }) => theme.colors.card_sub};

  border-radius: 0.4rem;
`;

const NumberWrapper = styled.ul`
  display: flex;
  justify-content: space-around;

  width: 18rem;

  margin-top: 1rem;
  margin-left: 0.6rem;
`;

const NumberItem = styled.li<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.5rem;
  height: 2rem;

  letter-spacing: ${({ type }) => (type === "password" ? -4 : 1)}px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 1.5em;
`;

const Name = styled.div`
  width: 15rem;
  height: 3rem;
  word-break: break-all;

  ${({ theme }) => theme.fonts.text}
`;

const Date = styled.div``;
