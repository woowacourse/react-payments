import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../constants';
import Header from '../components/common/Header/Header';
import Button from '../components/common/Button/Button';
import CardList from '../components/CardList/CardList';
import { PaymentsContext } from '../contexts/PaymentsContext';

function CardListPage() {
  const { cardList } = useContext(PaymentsContext);

  return (
    <>
      <Header content="나의 카드" />
      <main>
        <CardList cardList={cardList} />
        <Link to={PATH.ADD}>
          <Button variant="secondary" className="add-button mg-t-24 center-hoz-item w-250">
            카드 추가하기
          </Button>
        </Link>
      </main>
    </>
  );
}

export default CardListPage;
