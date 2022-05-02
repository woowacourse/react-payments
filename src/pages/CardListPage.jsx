import Card from '../components/common/Card/Card';
import PageTitle from '../components/common/PageTitle/PageTitle';
import { PAGES } from '../constants';

function CardListPage({ setPage }) {
  const handleCardAdd = () => {
    setPage(PAGES.ADD);
  };

  return (
    <div className="app">
      <PageTitle title="보유카드" />
      <Card isEmpty={true} handleCardAdd={handleCardAdd} />
    </div>
  );
}

export default CardListPage;
