import AddCardButton from '../../components/AddCardButton/AddCardButton';
import CardList from '../../components/CardList/CardList';
import EmptyHeader from '../../components/EmptyHeader/EmptyHeader';
import { CardInfo } from '../../types';

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
