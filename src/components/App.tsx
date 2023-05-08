import styles from './App.module.css';
import Router from '../routes/Router';
import useCardInfo from '../hook/useCardInfo';

const App = () => {
  const { cardInfo, registerNewCard } = useCardInfo();

  return (
    <div className={styles.container}>
      <Router cardInfo={cardInfo} registerNewCard={registerNewCard} />
    </div>
  );
};

export default App;
