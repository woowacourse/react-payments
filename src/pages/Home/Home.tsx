import AddCardButton from '../../components/AddCardButton/AddCardButton';
import CardList from '../../components/CardList/CardList';
import EmptyHeader from '../../components/EmptyHeader/EmptyHeader';
import styles from './Home.module.css';
import { CardInfo } from '../../types';
import { useEffect } from 'react';
import { history } from '../../routes/history';
import { useNavigate } from 'react-router-dom';

type HomeProps = {
  cardInfo: CardInfo[];
};

const Home = ({ cardInfo }: HomeProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const listenBackButton = () => {
      alert('결제 페이지에서 뒤로 가기는 어렵습니다.');
      navigate('/');
    };

    const ignoreHistoryEvent = history.listen(({ action }) => {
      if (action === 'POP') {
        listenBackButton();
      }
    });

    return ignoreHistoryEvent;
  }, [navigate]);

  return (
    <div className={styles.container}>
      <EmptyHeader />
      <CardList cardInfo={cardInfo} />
      <AddCardButton showMessage={cardInfo.length === 0} />
    </div>
  );
};

export default Home;
