import { Link } from 'react-router-dom';
import ROUTE from '../../constants/route';

const CardList = () => (
  <div>
    <Link to={ROUTE.ADD}>카드 추가하기</Link>
  </div>
);

export default CardList;
