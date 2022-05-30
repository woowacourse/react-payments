import Header from '../components/Header/index.tsx';
import PageTitle from 'components/common/PageTitle';
import CardList from 'components/CardList';

function CardListPage() {
  return (
    <div className="app">
      <Header>
        <PageTitle title="보유카드" />
      </Header>
      <CardList />
    </div>
  );
}

export default CardListPage;
