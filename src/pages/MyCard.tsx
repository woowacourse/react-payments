import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorage";
import { CardType } from "../types";
import { ROUTER_PATH } from "../router/path";
import { Page, Header, Card } from "../components";

const MyCard = () => {
  const navigate = useNavigate();
  const cards = getLocalStorage("card");

  return (
    <Page>
      <Header title="보유카드" isBack={false} />
      {cards.map((card: CardType) => (
        <CardWrapper key={crypto.randomUUID()}>
          <Card {...card} />
          <p>{card.name}</p>
        </CardWrapper>
      ))}
      <EmptyCardWrapper onClick={() => navigate(ROUTER_PATH.AddCard)}>
        +
      </EmptyCardWrapper>
    </Page>
  );
};

const CardWrapper = styled.div`
  margin-bottom: 30px;

  & > p {
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    color: #575757;
    margin-top: 17px;
  }
`;

const EmptyCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #575757;
  font-size: 30px;

  width: 208px;
  height: 123px;

  background: #e5e5e5;
  border-radius: 5px;
  text-decoration: none;

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  :active {
    transform: scale(0.98);
  }
`;

export default MyCard;
