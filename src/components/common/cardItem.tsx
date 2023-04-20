import styled from "styled-components";

interface INumber {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface CardInfo {
  cardNumber: INumber;
  date: any;
  userName: string;
  code?: string;
  password?: string;
}

interface CardItemProps {
  info: CardInfo;
}

export function CardItem(props: CardInfo) {
  const { cardNumber, date, userName } = props;
  return (
    <CardContainer>
      <Magnetic />
      <NumberWrapper>
        <NumberItem>{cardNumber?.first}</NumberItem>
        <NumberItem>{cardNumber?.second}</NumberItem>
        <NumberItem>{"•".repeat(4)}</NumberItem>
        <NumberItem>{"•".repeat(4)}</NumberItem>
      </NumberWrapper>
      <InfoWrapper>
        <Name>{userName}</Name>
        <Date>
          {date?.month}/{date?.year}
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

  background-color: #333333;
  color: white;
  font-size: 1.3rem;
  letter-spacing: 0.2rem;

  border-radius: 0.5rem;
`;

const Magnetic = styled.div`
  width: 4rem;
  height: 2.6rem;

  margin-top: 4.7rem;
  margin-left: 1.4rem;

  background-color: #cbba64;

  border-radius: 0.4rem;
`;

const NumberWrapper = styled.ul`
  display: flex;
  justify-content: space-around;

  margin: 1.5rem 1rem 0;
`;

const NumberItem = styled.li``;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1rem 1.5em;
`;

const Name = styled.div``;

const Date = styled.div``;
