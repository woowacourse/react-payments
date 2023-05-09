import styles from './Loading.module.css';
import CardSpinner from '../../components/common/CardSpinner/CardSpinner';

const Loading = () => {
  return (
    <div className={styles.container}>
      <CardSpinner />
      <h3 className={styles['blinking-text']}>카드를 등록중입니다...</h3>
    </div>
  );
};

export default Loading;
