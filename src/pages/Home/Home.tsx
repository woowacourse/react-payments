import CardList from '../../components/CardList/CardList';
import Header from '../../components/common/Header/Header';
import { loadCardsFromLocalStorage } from '../../domains/cardLocalStorage';

const Home = () => {
  return (
    <>
      <Header title="보유카드" />
      <CardList cardInfo={loadCardsFromLocalStorage()} />
    </>
  );
};

export default Home;
