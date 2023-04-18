import { Link } from 'react-router-dom';
import Header from '../components/common/Header/Header';
import Button from '../components/common/Button/Button';
function CardListPage() {
  return (
    <>
      <Header content="나의 카드" />
      <Link to={'/add-card'}>
        <Button className="add-button">카드 추가하기</Button>
      </Link>
    </>
  );
}

export default CardListPage;
