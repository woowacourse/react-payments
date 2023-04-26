import { useContext } from "react";
import AppBar from "../../components/AppBar/AppBar";
import CardList from "../../components/CardLIst/CardList";
import { Container } from "../../components/common";
import { GlobalContext } from "../../context/GlobalProvider";

const CardListPage = () => {
  const { cards } = useContext(GlobalContext);

  return (
    <Container>
      <AppBar title="보유카드" />
      {!cards.length && <span>새로운 카드를 등록해주세요.</span>}
      <CardList cards={cards} />
    </Container>
  );
};

export default CardListPage;
