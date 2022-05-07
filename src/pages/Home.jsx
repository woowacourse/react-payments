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
import { CARD_SIZE } from "constant";

function Home() {
  const navigate = useNavigate();
  const cardList = useContext(CardListContext);

  return (
    <PageWrapper>
      <Header headText="보유 카드" />
      <CardScrollWrapper>
        <CardListWrapper>
          {cardList.map((data) => {
            return (
              <Card
                key={data.cardId}
                size={CARD_SIZE.SMALL}
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
