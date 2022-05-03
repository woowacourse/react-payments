import Header from '../components/Header/Header';
import Card from 'components/common/Card/Card';
import PageTitle from 'components/common/PageTitle/PageTitle';

import { PAGES } from 'constants';

function CardListPage({ setPage }) {
  const handleCardAdd = () => {
    setPage(PAGES.ADD);
  };

  return (
    <div className="app">
      <Header>
        <PageTitle title="보유카드" />
      </Header>
      <Card isEmpty handleCardAdd={handleCardAdd} />
    </div>
  );
}

export default CardListPage;
