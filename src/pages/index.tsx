import { Link } from 'react-router-dom';
import PageTemplate from '../components/commons/PageTemplate';
import { ROUTE } from '../route';

function Landing() {
  return (
    <PageTemplate>
      <Link to={ROUTE.addCard.route}>
        <div className="tab-box flex-center">카드 추가하기</div>
      </Link>
      <Link to={ROUTE.cardList.route}>
        <div className="tab-box flex-center">카드 목록보기</div>
      </Link>
    </PageTemplate>
  );
}

export default Landing;
