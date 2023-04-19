import AddCardButton from "../../components/AddCardButton/AddCardButton";
import AppBar from "../../components/AppBar/AppBar";
import CardList from "../../components/CardLIst/CardList";
import { Container } from "../../components/common";
import { Card } from "../../types";

type CardListPageProps = {
  cards: Card[];
};

const CardListPage = ({ cards }: CardListPageProps) => {
  return (
    <Container>
      <AppBar title="보유카드" />
      <CardList cards={cards} />
      {!cards.length && <span>새로운 카드를 등록해주세요.</span>}
      <AddCardButton />
    </Container>
  );
};

export default CardListPage;
