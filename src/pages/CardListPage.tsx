import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../constants';
import Header from '../components/common/Header/Header';
import Button from '../components/common/Button/Button';
import CardList from '../components/CardList/CardList';
import { CardListContext } from '../contexts/CardListContext';

function CardListPage() {
  const { cardList } = useContext(CardListContext);
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
}

export default CardListPage;
