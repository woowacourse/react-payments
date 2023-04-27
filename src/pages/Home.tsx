import CardList from '../components/CardList/CardList';
import Header from '../components/common/Header/Header';
import { CardInfo } from '../types';

type HomeProps = {
  cardInfo: CardInfo[];
};

const Home = ({ cardInfo }: HomeProps) => {
  return (
    <>
      <Header title="보유카드" />
      <CardList cardInfo={cardInfo} />
    </>
  );
};

export default Home;
