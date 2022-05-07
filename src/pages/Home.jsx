import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "components/common/Header";
import Card from "components/common/Card";
import { CardListContext } from "context/CardListProvider";
import {
  PageWrapper,
  CardListWrapper,
  CardAddWrapper,
  CardScrollWrapper,
} from "./style";

function Home() {
  const navigate = useNavigate();
  const cardList = useContext(CardListContext);
  console.log("홈 cardList", cardList);
  return (
    <PageWrapper>
      <Header headText="보유 카드" />
      <CardScrollWrapper>
        <CardListWrapper>
          {cardList.map((data) => {
            console.log("data", data);
            return (
              <Card
                key={data.cardId}
                size="small"
                color={data.company.color}
                company={data.company.name}
                cardNumbers={data.cardNumbers}
                owner={data.owner}
                dueMonth={data.dueDate.month}
                dueYear={data.dueDate.year}
                nickname={data.nickname}
              />
            );
          })}
          <CardAddWrapper onClick={() => navigate("/new")}>+</CardAddWrapper>
        </CardListWrapper>
      </CardScrollWrapper>
    </PageWrapper>
  );
}

export default Home;
