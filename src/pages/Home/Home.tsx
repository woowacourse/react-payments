import AddCardButton from '../../components/AddCardButton/AddCardButton';
import CardList from '../../components/CardList/CardList';
import EmptyHeader from '../../components/EmptyHeader/EmptyHeader';
import styles from './Home.module.css';
import { CardInfo } from '../../types';

type HomeProps = {
  cardInfo: CardInfo[];
};

const Home = ({ cardInfo }: HomeProps) => {
  return (
    <div className={styles.container}>
      <EmptyHeader />
      <CardList cardInfo={cardInfo} />
      <AddCardButton showMessage={cardInfo.length === 0} />
    </div>
  );
};

export default Home;
