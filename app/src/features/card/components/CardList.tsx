import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import EmptyCardList from "./list/EmptyCardList";

export default function CardList({ cards }) {
  const navigate = useNavigate();

  const gotoCardCreatePage = () => {
    navigate("/card/create/");
  };

  return (
    <CardListContainer>
      <h1>보유 카드</h1>
      <SomeContainer>
        <EmptyCardList onClick={gotoCardCreatePage} />
      </SomeContainer>
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
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

const SomeContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
