import AppBar from "../../components/AppBar/AppBar";
import CardList from "../../components/CardList/CardList";
import { Container } from "../../components/common";
import { Card } from "../../types";

type CardListPageProps = {
  cards: Card[];
};

const CardListPage = ({ cards }: CardListPageProps) => {
  return (
    <Container>
      <AppBar title="보유카드" />
      {!cards.length && <span>새로운 카드를 등록해주세요.</span>}
      <CardList cards={cards} />
    </Container>
  );
};

export default CardListPage;
