import Header from "components/common/Header";
import Card from "components/common/Card";
import { useNavigate } from "react-router-dom";
import { PageWrapper, CardListWrapper, CardAddWrapper, Test } from "./style";

function Home() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Header headText="보유 카드" />
      <Test>
        <CardListWrapper>
          <Card
            size="small"
            color="blue"
            company="aaaaa"
            cardNumbers={[1111, 2222, 3333, 4444]}
            owner="NAME"
            dueMonth="MM"
            dueYear="YY"
          />
          <Card
            size="small"
            color="blue"
            company="aaaaa"
            cardNumbers={[1111, 2222, 3333, 4444]}
            owner="NAME"
            dueMonth="MM"
            dueYear="YY"
          />
          <CardAddWrapper onClick={() => navigate("/new")}>+</CardAddWrapper>
        </CardListWrapper>
      </Test>
    </PageWrapper>
  );
}

export default Home;
