import styled from "styled-components";
import { CardNumber } from "../../type/input";

export interface CardProps {
  cardNumber: CardNumber;
  month: string;
  year: string;
  userName: string;
}

export function Card(props: CardProps) {
  const { cardNumber, month, year, userName } = props;

  return (
    <CardContainer>
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

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 21.3rem;
  height: 13.3rem;
  margin-bottom: 3.5rem;

  background-color: ${({ theme }) => theme.colors.card_main};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.card};

  border-radius: 0.5rem;
`;

const ICcard = styled.div`
  width: 4rem;
  height: 2.6rem;

  margin-top: 4rem;
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
