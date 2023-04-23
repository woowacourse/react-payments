import AddCardButton from '../components/AddCardButton/AddCardButton';
import CardList from '../components/CardList/CardList';
import Header from '../components/common/Header/Header';
import { CardInfo } from '../types';

type HomeProps = {
  cardInfo: CardInfo[];
};

const Home = ({ cardInfo }: HomeProps) => {
  return (
    <>
      <EmptyHeader />
      <CardList cardInfo={cardInfo} />
      <AddCardButton showMessage={cardInfo.length === 0} />
    </>
  );
};

export default Home;
