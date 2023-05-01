import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button/Button";
import CardList from "../components/CardList/CardList";
import Header from "../components/common/Header/Header";
import { useCardListContext } from "../contexts/CardListContext";
import { PATH } from "../constants";

const CardListPage = () => {
  const { cardList } = useCardListContext();
  const navigate = useNavigate();

  return (
    <>
      <Header content="나의 카드" />
      <main>
        <CardList cardList={cardList} />
        <Button
          variant="secondary"
          className="add-button mg-t-24 center-hoz-item w-250"
          onClick={() => navigate(PATH.ADD)}
        >
          카드 추가하기
        </Button>
      </main>
    </>
  );
};

export default CardListPage;
