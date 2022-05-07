import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Header from "components/Header";
import Card from "components/Card";
import { CardListContext } from "context/CardListProvider";
import { CARD_SIZE } from "constant";
import {
  PageWrapper,
  CardListWrapper,
  CardAddWrapper,
  CardScrollWrapper,
} from "./style";

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
                key={data.id}
                size={CARD_SIZE.SMALL}
                color={data.company.color}
                company={data.company.name}
                cardNumbers={data.cardNumbers}
                owner={data.owner}
                dueMonth={data.dueDate.month}
                dueYear={data.dueDate.year}
                nickname={data.nickname}
                onClick={() => navigate(`/edit/${data.id}`)}
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
