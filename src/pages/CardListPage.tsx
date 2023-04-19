import { Link } from 'react-router-dom';
import Header from '../components/common/Header/Header';
import Button from '../components/common/Button/Button';
import CardList from '../components/CardList/CardList';
import { Card } from '../types';

interface CardListPageProps {
  cardList: Card[];
}

function CardListPage({ cardList }: CardListPageProps) {
  return (
    <>
      <Header content="나의 카드" />
      <CardList cardList={cardList} />
      <Link to={'/add-card'}>
        <Button className="add-button">카드 추가하기</Button>
      </Link>
    </>
  );
}

export default CardListPage;
