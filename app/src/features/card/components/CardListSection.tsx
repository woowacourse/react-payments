import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import EmptyCardList from "./list/EmptyCardList";
import CardList from "./list/CardList";

export default function CardListSection({ cards }) {
  const navigate = useNavigate();

  const mockCards = [
    {
      id: "1234-1234-1234-1234-1234",
      issuerCode: "31",
      number: "341112123456901",
      expirationDate: "12/28",
    },
    {
      id: "1234-1234-1234-1234-1235",
      issuerCode: "41",
      number: "36333212345688",
      expirationDate: "12/28",
    },
    {
      id: "1234-1234-1234-1234-1236",
      issuerCode: "15",
      number: "6221261234567129",
      expirationDate: "12/28",
    },
  ];

  const gotoCardCreatePage = () => {
    navigate("/card/create/");
  };

  return (
    <CardListSectionContainer>
      <h1>보유 카드 {mockCards.length ? `(${mockCards.length})` : ""}</h1>
      <Content>
        {mockCards.length ? (
          <CardList cards={mockCards} />
        ) : (
          <EmptyCardList onClick={gotoCardCreatePage} />
        )}
      </Content>
    </CardListSectionContainer>
  );
}

const CardListSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  padding: 40px 20px;

  h1 {
    font-size: 18px;
    font-weight: 700;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
