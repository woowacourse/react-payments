import Header from '../components/Header/Header.tsx';
import PageTitle from 'components/common/PageTitle/PageTitle';
import CardList from 'components/CardList/CardList';

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
