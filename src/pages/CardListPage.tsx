import { Card } from '../types';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header/Header';
import Button from '../components/common/Button/Button';
import CardList from '../components/CardList/CardList';

interface CardListPageProps {
  cardList: Card[];
}

function CardListPage({ cardList }: CardListPageProps) {
  return (
    <>
      <Header content="나의 카드" />
      <main>
        <CardList cardList={cardList} />
        <Link to={'/add-card'}>
          <Button className="add-button center-hoz-item w-250">카드 추가하기</Button>
        </Link>
      </main>
    </>
  );
}

export default CardListPage;
